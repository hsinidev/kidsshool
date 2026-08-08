"use client";

import React, { useState } from "react";
import { 
  Search, 
  Download, 
  RefreshCw, 
  Mail, 
  Copy, 
  Phone, 
  Baby, 
  FolderOpen, 
  X,
  Trash2
} from "lucide-react";
import { deleteLead } from "@/app/actions/admin";

interface Lead {
  id: string;
  parentName: string;
  email: string;
  phone: string | null;
  childAge: string | null;
  message: string;
  createdAt: Date | string;
}

interface AdminTableProps {
  initialLeads: Lead[];
}

export default function AdminTable({ initialLeads }: AdminTableProps) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Format Date cleanly
  const formatDate = (dateValue: Date | string) => {
    const date = new Date(dateValue);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Filter leads based on search term
  const filteredLeads = leads.filter((lead) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      lead.parentName.toLowerCase().includes(searchLower) ||
      lead.email.toLowerCase().includes(searchLower) ||
      (lead.phone && lead.phone.toLowerCase().includes(searchLower)) ||
      (lead.childAge && lead.childAge.toLowerCase().includes(searchLower)) ||
      lead.message.toLowerCase().includes(searchLower)
    );
  });

  // Handle lead deletion
  const handleDelete = async (id: string) => {
    setIsDeleting(true);
    try {
      const res = await deleteLead(id);
      if (res.success) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) {
          setSelectedLead(null);
        }
        setDeleteConfirmId(null);
      } else {
        alert(res.error || "Failed to delete lead");
      }
    } catch (err) {
      console.error("handleDelete error:", err);
      alert("An error occurred while deleting the lead.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Export filtered leads to CSV
  const handleExportCSV = () => {
    if (filteredLeads.length === 0) return;

    const headers = ["Date", "Parent Name", "Email", "Phone", "Child Age", "Message"];
    const csvRows = [
      headers.join(","), // Header row
      ...filteredLeads.map((lead) => {
        const date = new Date(lead.createdAt).toISOString();
        const escapedMessage = `"${lead.message.replace(/"/g, '""')}"`;
        const escapedName = `"${lead.parentName.replace(/"/g, '""')}"`;
        return [
          date,
          escapedName,
          lead.email,
          lead.phone || "",
          lead.childAge || "",
          escapedMessage,
        ].join(",");
      }),
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `kidscool_leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Copy to clipboard helper
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    alert(`${label} copied to clipboard!`);
  };


  return (
    <div className="space-y-6">
      {/* ── CONTROLS PANEL ── */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
        <div className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search leads by name, email, message..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-800 transition-all text-slate-800"
          />
          <Search className="absolute left-3.5 top-3 text-slate-400 h-4 w-4" />
        </div>

        <div className="flex w-full sm:w-auto gap-2">
          <button
            onClick={handleExportCSV}
            disabled={filteredLeads.length === 0}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download size={16} /> Export CSV
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center p-2.5 border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors text-slate-500 hover:text-slate-800"
            title="Refresh Leads"
          >
            <RefreshCw size={16} className="transition-transform duration-500" />
          </button>
        </div>
      </div>

      {/* ── TABLE VIEW ── */}
      <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Submission Date</th>
                <th className="px-6 py-4">Parent Info</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Child Age</th>
                <th className="px-6 py-4">Message Snippet</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredLeads.length > 0 ? (
                filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="hover:bg-slate-50/80 transition-colors cursor-pointer group"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-slate-500 text-xs font-semibold">
                      {formatDate(lead.createdAt)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-slate-900 font-bold text-sm leading-tight group-hover:text-slate-950">
                        {lead.parentName}
                      </div>
                      <div className="flex items-center gap-1.5 mt-0.5 text-xs text-slate-500 hover:text-slate-900">
                        <Mail className="h-3.5 w-3.5 text-slate-400" />
                        <a
                          href={`mailto:${lead.email}`}
                          onClick={(e) => e.stopPropagation()}
                          className="hover:underline"
                        >
                          {lead.email}
                        </a>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(lead.email, "Email");
                          }}
                          className="opacity-0 group-hover:opacity-100 ml-1 text-slate-400 hover:text-slate-600 transition-opacity"
                          title="Copy Email"
                        >
                          <Copy className="h-3 w-3" />
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs text-slate-700">
                      {lead.phone ? (
                        <div className="flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5 text-slate-400" />
                          <a
                            href={`tel:${lead.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            className="hover:underline"
                          >
                            {lead.phone}
                          </a>
                        </div>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs">
                      {lead.childAge ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-md bg-slate-100 text-slate-800 font-bold text-[10px] tracking-wide uppercase">
                          <Baby className="h-3.5 w-3.5 mr-1 text-slate-600" /> {lead.childAge}
                        </span>
                      ) : (
                        <span className="text-slate-300">—</span>
                      )}
                    </td>
                    <td className="px-6 py-4 max-w-xs truncate text-xs text-slate-500 italic">
                      {lead.message}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setSelectedLead(lead)}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-colors"
                        >
                          View Details
                        </button>
                        {deleteConfirmId === lead.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleDelete(lead.id)}
                              disabled={isDeleting}
                              className="px-2.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteConfirmId(null)}
                              className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold rounded-lg transition-colors border border-slate-200"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirmId(lead.id)}
                            className="p-1.5 bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 rounded-lg transition-colors"
                            title="Delete inquiry"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-400">
                    <FolderOpen className="h-8 w-8 text-slate-300 mx-auto mb-2" />
                    <div className="font-semibold">No inquiries found</div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {searchTerm ? "Try searching for a different term." : "New leads will appear here as parents ask questions."}
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── DETAIL MODAL ── */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300 scale-95 md:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-slate-900">Lead Submission Details</h4>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                  ID: {selectedLead.id}
                </p>
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Parent Name
                  </span>
                  <strong className="text-slate-900 text-base">{selectedLead.parentName}</strong>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Submitted Date
                  </span>
                  <strong className="text-slate-900 text-sm">{formatDate(selectedLead.createdAt)}</strong>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${selectedLead.email}`}
                    className="text-slate-800 font-bold hover:underline block"
                  >
                    {selectedLead.email}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Phone Number
                  </span>
                  {selectedLead.phone ? (
                    <a
                      href={`tel:${selectedLead.phone}`}
                      className="text-slate-800 font-bold hover:underline block"
                    >
                      {selectedLead.phone}
                    </a>
                  ) : (
                    <span className="text-slate-400 font-semibold">Not provided</span>
                  )}
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                    Child&apos;s Age
                  </span>
                  {selectedLead.childAge ? (
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-slate-100 text-slate-800 font-bold text-xs uppercase mt-0.5">
                      <Baby className="h-3.5 w-3.5 mr-1 text-slate-700" /> {selectedLead.childAge}
                    </span>
                  ) : (
                    <span className="text-slate-400 font-semibold">Not provided</span>
                  )}
                </div>
              </div>

              <hr className="border-slate-100" />

              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider mb-2">
                  Inquiry Message
                </span>
                <div className="bg-slate-50 text-slate-800 p-4 rounded-2xl border border-slate-150 text-sm whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
                  {selectedLead.message}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex justify-between items-center px-6 py-4 bg-slate-50 border-t border-slate-100">
              <div>
                {deleteConfirmId === selectedLead.id ? (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-red-600 font-bold mr-1 animate-pulse">Are you sure?</span>
                    <button
                      onClick={() => handleDelete(selectedLead.id)}
                      disabled={isDeleting}
                      className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Yes, Delete
                    </button>
                    <button
                      onClick={() => setDeleteConfirmId(null)}
                      className="px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-750 text-xs font-bold rounded-xl transition-colors"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setDeleteConfirmId(selectedLead.id)}
                    className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 text-xs font-bold rounded-xl transition-colors border border-red-200 flex items-center gap-1.5"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete Inquiry
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <a
                  href={`mailto:${selectedLead.email}?subject=Re: Your KidsCool Inquiry`}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5" /> Reply via Email
                </a>
                <button
                  onClick={() => setSelectedLead(null)}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
