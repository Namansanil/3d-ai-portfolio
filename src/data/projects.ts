export interface Project {
  slug: string;
  title: string;
  tag: string;
  period: string;
  status: "live" | "in-progress" | "completed";
  description: string;
  longDescription: string;
  bullets: string[];
  stack: string[];
  github?: string;
  liveUrl?: string;
  // Detail page sections
  overview: string;
  problem: string;
  solution: string;
  features: { title: string; description: string }[];
  challenges: { title: string; description: string }[];
  outcomes: string[];
  architecture: string;
}

export const projects: Project[] = [
  {
    slug: "surfer-of-india",
    title: "SurferOfIndia",
    tag: "Multi-Vendor E-Commerce",
    period: "Jun 2026 — Present",
    status: "in-progress",
    description:
      "Scalable multi-vendor marketplace for surfboards, wetsuits and outdoor gear. Separate experiences for buyers, sellers and admins with full order, inventory and analytics workflows.",
    longDescription:
      "SurferOfIndia is a production-grade multi-vendor marketplace purpose-built for India's emerging surf community. The platform handles the entire commerce lifecycle — product discovery, cart, checkout, payment, fulfillment, and post-sale analytics — across three distinct user roles: buyers, sellers, and platform admins.",
    bullets: [
      "Seller dashboard with approval workflows",
      "Secure checkout & payment gateway integration",
      "Admin analytics, sales reports, monitoring",
      "Mobile-first responsive, real-time updates",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL", "Supabase", "Tailwind CSS", "Vercel", "Cloudflare"],
    github: "https://github.com/Namansanil",
    overview:
      "SurferOfIndia addresses a real gap in the Indian market — there's no dedicated platform for surf gear. Most transactions happen on generic marketplaces or Instagram DMs. This project creates a category-specific marketplace that understands the domain: board specs, fin setups, wetsuit sizing, and rental workflows.",
    problem:
      "India's surf industry is fragmented. Sellers list on WhatsApp groups and Instagram; buyers have no way to compare products, read reviews, or get secure checkout. Admins have zero visibility into platform-wide sales, fraud or inventory health.",
    solution:
      "A role-scoped multi-tenant platform where sellers get their own storefronts with inventory management, buyers get a curated discovery + checkout experience, and admins get a real-time analytics dashboard with approval queues and financial reporting.",
    features: [
      {
        title: "Multi-Vendor Storefronts",
        description:
          "Each seller gets a dedicated storefront with their own product catalog, branding, and order inbox. Sellers apply to join, go through an admin review, then can list immediately.",
      },
      {
        title: "Seller Approval Workflow",
        description:
          "Admins review seller applications with business verification, KYC documents, and product category approvals. Approved sellers receive an onboarding email with store setup instructions.",
      },
      {
        title: "Payment Gateway Integration",
        description:
          "Razorpay integration handles split payments — buyer pays the platform, platform settles to the seller after fulfillment. Includes refund handling and dispute management.",
      },
      {
        title: "Admin Analytics Dashboard",
        description:
          "Real-time GMV tracking, order funnel analysis, seller performance leaderboards, and a fraud monitoring queue. Built with Recharts and server-side aggregations.",
      },
      {
        title: "Inventory Management",
        description:
          "Sellers manage SKUs, variants (size, color, fin setup), stock levels, and pricing tiers. Low-stock alerts are pushed via email and in-app notifications.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Fully responsive from 320px up. Product images use responsive srcsets, checkout is a single scrollable flow on mobile, and the seller dashboard is thumb-friendly.",
      },
    ],
    challenges: [
      {
        title: "Split Payment Architecture",
        description:
          "Razorpay's route API required careful implementation to hold funds in escrow until fulfillment, then settle to the correct seller account while deducting platform fees atomically.",
      },
      {
        title: "Multi-Tenant Data Isolation",
        description:
          "PostgreSQL Row Level Security (RLS) policies via Supabase ensure sellers can only see their own orders and products, even sharing the same database schema.",
      },
      {
        title: "Real-Time Inventory Sync",
        description:
          "When multiple buyers add the same low-stock item to cart simultaneously, optimistic locking on the inventory table prevents overselling without expensive distributed locks.",
      },
      {
        title: "SEO for a Dynamic Marketplace",
        description:
          "Seller storefronts and product pages are server-rendered via Next.js App Router for full SEO indexability, while dashboard routes are client-side only.",
      },
    ],
    outcomes: [
      "Platform architecture supports 100+ concurrent sellers without schema changes",
      "Checkout conversion optimised to 3-step flow — reduced drop-off by design",
      "Admin dashboard provides real-time GMV and fraud detection visibility",
      "Supabase RLS guarantees zero cross-tenant data leakage at DB level",
    ],
    architecture:
      "Next.js App Router for the buyer-facing storefront (SSR/ISR for SEO), a separate Express API for seller and admin operations, PostgreSQL via Supabase with RLS for data isolation, Cloudflare for CDN and edge caching, and Vercel for deployment with preview environments per PR.",
  },
  {
    slug: "mambo-jambo-surf-camp",
    title: "Mambo Jambo Surf Camp",
    tag: "Booking & Management Platform",
    period: "Jan 2026 — Jun 2026",
    status: "completed",
    description:
      "Full-stack booking system for surf lessons, accommodation and board rentals with an admin dashboard for occupancy, payments and lesson batch assignments.",
    longDescription:
      "Mambo Jambo Surf Camp is a full production booking and operations platform for a real surf camp in Mulki, Karnataka. The platform replaced a manual WhatsApp + spreadsheet workflow, handling everything from guest inquiries to lesson scheduling, room allocation, payment collection and instructor assignment.",
    bullets: [
      "Real-time accommodation availability",
      "Automated booking workflows",
      "Admin dashboard with guest records",
      "REST APIs for booking & operations",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "Supabase", "Vercel"],
    github: "https://github.com/Namansanil",
    overview:
      "A real client project for a surf camp operating in Mulki, Karnataka. The camp was managing bookings through WhatsApp messages and manual Excel sheets — leading to double bookings, missed payments and poor guest experience. This platform digitised every workflow.",
    problem:
      "The surf camp had no digital booking system. Guests booked via WhatsApp, payments were collected in cash or bank transfer with no automated tracking, rooms were allocated manually in spreadsheets causing frequent double-bookings, and instructors had no visibility into their lesson schedules.",
    solution:
      "A purpose-built booking platform with a public-facing booking flow, a real-time availability calendar, automated payment collection via Razorpay, and an admin dashboard that replaces every spreadsheet with structured, searchable records.",
    features: [
      {
        title: "Availability Calendar",
        description:
          "Real-time room and lesson slot availability computed from the booking database. Guests see exactly which dates are open for their chosen accommodation type and lesson package.",
      },
      {
        title: "Multi-Service Booking Flow",
        description:
          "A single checkout flow that lets guests bundle surf lessons, accommodation, and board rentals — with pricing calculated dynamically based on duration, package type, and seasonal rates.",
      },
      {
        title: "Automated Payment Collection",
        description:
          "Razorpay integration sends payment links by email/WhatsApp. Partial deposit + balance-on-arrival is supported. Payment status is reflected live in the admin dashboard.",
      },
      {
        title: "Admin Dashboard",
        description:
          "A comprehensive operations view showing all upcoming bookings, guest records, room occupancy heat map, lesson batch assignments, and revenue summaries — filterable by date range.",
      },
      {
        title: "Instructor Scheduling",
        description:
          "Lessons are grouped into batches by skill level. Admins assign instructors to batches and instructors receive their schedule via email. Conflicts are flagged automatically.",
      },
      {
        title: "Guest Communication",
        description:
          "Automated email confirmations, payment reminders, pre-arrival instructions, and checkout summaries — reducing the manual WhatsApp messaging that was consuming staff time.",
      },
    ],
    challenges: [
      {
        title: "Replacing a Live Manual Workflow",
        description:
          "The camp was actively taking bookings during development. We had to run the new system in parallel with WhatsApp bookings for 4 weeks, then migrate historical records before cut-over.",
      },
      {
        title: "Availability Consistency Under Concurrent Bookings",
        description:
          "PostgreSQL advisory locks prevent two guests from booking the same room for the same night, even with simultaneous checkout flows. Availability checks and inserts are wrapped in a transaction.",
      },
      {
        title: "Flexible Pricing Engine",
        description:
          "Pricing varies by accommodation type, lesson package, season, and group size. A rules-based pricing engine evaluates all applicable rules in priority order, with admin overrides.",
      },
      {
        title: "Offline Resilience",
        description:
          "Camp connectivity is intermittent (rural coastal area). The admin dashboard uses SWR with stale-while-revalidate so staff can continue viewing records during brief outages.",
      },
    ],
    outcomes: [
      "Eliminated double-bookings — zero incidents since launch",
      "Reduced manual admin work from ~4 hours/day to under 30 minutes",
      "Payment collection rate improved — digital payment links have higher conversion than bank-transfer requests",
      "Full booking history searchable and exportable — replaced 6 Excel files",
    ],
    architecture:
      "React + TypeScript frontend hosted on Vercel, Express REST API on a Node.js server, PostgreSQL via Supabase for structured booking and guest data, Razorpay for payment processing, and Nodemailer for transactional email. RLS policies on Supabase ensure admin-only access to sensitive guest data.",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
