import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hsini KidsCool — Creative Learning & Childcare for Little Stars",
  description:
    "Hsini KidsCool offers a vibrant, nurturing environment where young minds blossom through play-based learning, creative exploration, and expert childcare. Enroll your child today!",
  keywords: [
    "childcare",
    "nursery",
    "kindergarten",
    "preschool",
    "early childhood education",
    "kids learning",
    "daycare",
  ],
  authors: [{ name: "Hsini KidsCool", url: "https://hsini.dev" }],
  openGraph: {
    title: "Hsini KidsCool — Creative Learning & Childcare",
    description:
      "A vibrant nursery and kindergarten where every child shines.",
    url: "https://hsini.dev",
    siteName: "Hsini KidsCool",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bubblegum+Sans&family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
