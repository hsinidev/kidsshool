# 🎨 Kids School & Nursery Web Application

A vibrant, modern, high-performance web platform for early childhood education, preschool, nursery, and daycare centers. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Prisma ORM**.

---

## 🌟 Overview

The **Kids School** platform provides an immersive experience for parents exploring childcare and early education options. It features multiple dynamic homepage layouts, comprehensive program details, interactive photo galleries, an event calendar, parent inquiry forms, and a secured administrator dashboard for managing incoming inquiries (leads).

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI & Animations**: [React 19](https://react.dev/), [Framer Motion 12](https://www.framer.com/motion/), [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Form Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Database & ORM**: [Prisma ORM 6](https://www.prisma.io/) with SQLite (`dev.db`), Cloudflare D1 Driver Adapter, and PostgreSQL support
- **Email Notifications**: [Resend API](https://resend.com/)
- **Edge & Cloud Deployment**: Cloudflare Workers (`@opennextjs/cloudflare`, `wrangler`), Node.js VPS/PM2 deployment ready

---

## 📸 Key Features

### 🏡 1. Interactive Landing Pages & Components
- **Multi-Theme Homepages**: 4 distinct homepage layout options (`/`, `/home2`, `/home3`, `/home4`).
- **Hero Slider**: Rich visual carousel showcasing school facilities and active learning environments.
- **Micro-Animations & Visual Magic**: Floating decorative elements, sparkles, interactive counters, and smooth page transitions (`MagicSpells.tsx`, `Decorations.tsx`).

### 📚 2. Programs, Curriculum & Facilities
- **Age Group Programs**: Tailored curriculum paths for Toddlers, Preschoolers, and Kindergarteners (`/curriculum`, `/courses-listing`).
- **Specialized Service Pages**:
  - 🥗 **Nutrition & Healthy Dining**: `/nutrition`
  - 🚌 **Transportation & Safety**: `/transportation` & `/child-safety`
  - 🧸 **Playground & Activities**: `/playground` & `/facilities`
  - 👶 **Individual Care**: `/individual-care`

### 📩 3. Parent Inquiry & Registration System
- **Registration Form**: Direct enrollment request form (`/registration`, `/ask-us`).
- **Validation**: Full client-side & server-side validation using Zod.
- **Server Actions**: Clean asynchronous lead capture via `src/app/actions/contact.ts`.
- **Database Persistence**: Automatic record creation in SQLite/Cloudflare D1 `Lead` table.

### 🔐 4. Admin Management Dashboard (`/admin5467`)
- **Authentication**: Secured login screen (`AdminLogin.tsx`).
- **Lead Dashboard**: View, filter, search, and export incoming parent inquiries (`AdminTable.tsx`).
- **Server-Side Operations**: Admin server actions for status updates and record management (`src/app/actions/admin.ts`).

---

## 📁 Project Structure

```
kidsshool/
├── prisma/
│   └── schema.prisma         # Prisma schema defining Lead and AdminUser models
├── public/
│   └── images/               # WebP & PNG optimized assets for activities, facilities, teachers
├── src/
│   ├── app/
│   │   ├── about/            # About Us page
│   │   ├── actions/          # Next.js Server Actions (admin.ts, contact.ts)
│   │   ├── activities/       # School activities gallery
│   │   ├── admin5467/        # Secured Admin Portal dashboard
│   │   ├── ask-us/           # Contact / Inquiry form page
│   │   ├── child-safety/     # Child safety protocols
│   │   ├── course-categories/# Learning categories
│   │   ├── curriculum/       # Curriculum breakdown
│   │   ├── events/           # School events schedule
│   │   ├── facilities/       # Facilities & campus tour
│   │   ├── faq/              # Frequently asked questions
│   │   ├── gallery/          # Interactive image gallery
│   │   ├── home2, home3, home4/# Alternative homepage variations
│   │   ├── nutrition/        # Meals & dietary plans
│   │   ├── registration/     # Enrollment form page
│   │   ├── transportation/   # Bus service details
│   │   ├── globals.css       # Tailwind CSS v4 global styles & design tokens
│   │   └── layout.tsx        # Global App layout & providers
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx        # Navigation header with mobile menu
│   │   ├── Footer.tsx        # Site footer & contact info
│   │   ├── AdminTable.tsx    # Admin dashboard data grid
│   │   ├── MagicSpells.tsx   # Floating interactive animations
│   │   └── HeroSlider.tsx    # Homepage hero carousel
│   └── lib/
│       └── db.ts             # Prisma client initialization with SQLite / D1 adapters
├── wrangler.toml             # Cloudflare Workers / OpenNext configuration
└── package.json              # Project dependencies and script commands
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js 18+ or Node.js 20+
- npm, pnpm, or yarn

### 1. Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/hsinidev/kidsshool.git
cd kidsshool
npm install
```

### 2. Database Setup

Initialize the SQLite database using Prisma:

```bash
npx prisma db push
```

*(Optional)* Seed default data:
```bash
npx prisma db seed
```

### 3. Environment Variables

Create a `.env` or `.env.local` file in the project root:

```env
DATABASE_URL="file:./dev.db"
RESEND_API_KEY="your_resend_api_key_here"
```

### 4. Run Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚡ Deployment

### Cloudflare Workers / Pages (OpenNext)

This repository is pre-configured for Cloudflare deployment using `@opennextjs/cloudflare` and `wrangler`:

```bash
npm run pages:build
npx wrangler deploy
```

### VPS / Node.js Hosting

To build for production on a VPS (PM2 / Nginx):

```bash
npm run build
npm run start
```

---

## 👤 Author

Developed by **hsinidev**  
- **Website**: [hsini.dev](https://hsini.dev)
- **Contact**: [contact@hsini.dev](mailto:contact@hsini.dev)
- **GitHub**: [@hsinidev](https://github.com/hsinidev)

