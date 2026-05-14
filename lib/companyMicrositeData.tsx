import type { ReactNode } from "react";
import {
  Cable,
  Code2,
  Cpu,
  Download,
  FileSearch,
  Globe,
  HardDrive,
  Headphones,
  KeyRound,
  Layout,
  Lock,
  MonitorSmartphone,
  Router,
  ShieldCheck,
  UserCheck,
  Wrench
} from "lucide-react";

export type CompanyServiceItem = {
  title: string;
  description: string;
  outcome: string;
  icon: ReactNode;
};

export type CompanyMicrositeConfig = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  navBrandBefore: string;
  navBrandAccent: string;
  heroEyebrow: string;
  heroTitleBefore: string;
  heroTitleAccent: string;
  heroLead: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSubtitle: string;
  services: CompanyServiceItem[];
  ctaTitle: string;
  ctaSubtitle: string;
  mailtoSubject: string;
};

const icon = (node: ReactNode) => node;

export const dtdTechSupportConfig: CompanyMicrositeConfig = {
  slug: "dtd-tech-support",
  seoTitle: "DTD Tech Support – On-site & day-to-day IT help",
  seoDescription:
    "Door-to-door and everyday tech support in the DMV—software setup, hardware installs, troubleshooting, and network fixes.",
  navBrandBefore: "DTD ",
  navBrandAccent: "Tech Support",
  heroEyebrow: "On-site · Remote · Same-week response",
  heroTitleBefore: "Tech support that comes to you—",
  heroTitleAccent: "and stays with you.",
  heroLead:
    "From new PC setup to printer meltdowns, Wi‑Fi dead zones, and line-of-business installs, you get patient, practical help at your desk or your door—so work keeps moving.",
  servicesEyebrow: "What we handle",
  servicesTitle: "Day-to-day IT, covered end to end.",
  servicesSubtitle:
    "One team for the small fires and the bigger upgrades—documented, repeatable, and explained in plain language.",
  services: [
    {
      title: "Software setup & updates",
      description:
        "Operating systems, productivity suites, drivers, and business apps installed and tuned with your workflows in mind.",
      outcome: "Fewer “it worked yesterday” surprises after patches or new hires.",
      icon: icon(<Download size={20} strokeWidth={1.6} />)
    },
    {
      title: "Hardware installs & moves",
      description:
        "Desktops, laptops, monitors, docks, printers, and peripherals—unboxed, cabled, tested, and labeled.",
      outcome: "Clean desks, correct ports, and gear that survives the first week.",
      icon: icon(<HardDrive size={20} strokeWidth={1.6} />)
    },
    {
      title: "Computer & device troubleshooting",
      description:
        "Slow machines, blue screens, login issues, sync problems, and peripheral quirks diagnosed with a methodical checklist.",
      outcome: "Shorter outages and a clear note of what was wrong and what changed.",
      icon: icon(<Cpu size={20} strokeWidth={1.6} />)
    },
    {
      title: "Networks & connectivity",
      description:
        "Wi‑Fi coverage checks, router and switch basics, VPN handoffs, and ISP coordination when the problem is upstream.",
      outcome: "Stable connections where your team actually sits and meets.",
      icon: icon(<Router size={20} strokeWidth={1.6} />)
    },
    {
      title: "On-site & walk-up help",
      description:
        "Scheduled visits for offices and home offices across the DMV—remote first when it saves you time.",
      outcome: "Hands on hardware when remote guesses stop being good enough.",
      icon: icon(<MonitorSmartphone size={20} strokeWidth={1.6} />)
    },
    {
      title: "Friendly helpdesk coverage",
      description:
        "A calm first line for staff questions—password resets, MFA, email, and “where did my file go?” moments included.",
      outcome: "Your people get answers without opening five unrelated tickets.",
      icon: icon(<Headphones size={20} strokeWidth={1.6} />)
    }
  ],
  ctaTitle: "Tell us what is broken or what you are rolling out.",
  ctaSubtitle:
    "We will reply with a simple plan—visit window, remote session, or a quick fix you can try first.",
  mailtoSubject: "DTD Tech Support request"
};

export const haqueWebServicesConfig: CompanyMicrositeConfig = {
  slug: "haque-web-services",
  seoTitle: "Haque Web Services & Solutions – Calm, capable web delivery",
  seoDescription:
    "Static and lightweight sites, performance passes, accessibility fixes, and integration guidance—aligned with how you already work.",
  navBrandBefore: "Haque ",
  navBrandAccent: "Web Services & Solutions",
  heroEyebrow: "Design systems · Performance · Maintainability",
  heroTitleBefore: "Websites and web work that stay ",
  heroTitleAccent: "fast, clear, and easy to own.",
  heroLead:
    "You get thoughtful information architecture, restrained visuals that match your brand, and code you can hand to another vendor without drama—no mystery stacks, no lock-in by accident.",
  servicesEyebrow: "Capabilities",
  servicesTitle: "Web services built for operators, not slide decks.",
  servicesSubtitle:
    "We focus on pages people actually read, forms that submit, and metrics you can explain to leadership.",
  services: [
    {
      title: "Marketing & brochure sites",
      description:
        "Sharp copy structure, accessible components, and export-friendly builds that fit static hosting and CDNs.",
      outcome: "A credible first impression that loads quickly on mid-tier phones.",
      icon: icon(<Layout size={20} strokeWidth={1.6} />)
    },
    {
      title: "Performance & quality passes",
      description:
        "Image budgets, font loading, third-party script review, and Lighthouse-style fixes grounded in your real analytics.",
      outcome: "Meaningfully lower Largest Contentful Paint without redesign theater.",
      icon: icon(<Globe size={20} strokeWidth={1.6} />)
    },
    {
      title: "Accessibility remediation",
      description:
        "Keyboard paths, focus order, labels, contrast, and heading hierarchy—tested with assistive tech in mind.",
      outcome: "Fewer WCAG gaps that would block a procurement or legal review.",
      icon: icon(<UserCheck size={20} strokeWidth={1.6} />)
    },
    {
      title: "Forms, email, and light integrations",
      description:
        "Contact flows that degrade gracefully, spam resistance, and sensible handoffs to your CRM or inbox rules.",
      outcome: "Leads arrive complete and traceable—no silent failures.",
      icon: icon(<Code2 size={20} strokeWidth={1.6} />)
    },
    {
      title: "Hosting & DNS guidance",
      description:
        "Domain renewals, TLS, redirects, and Git-based deploys explained so your team knows who owns what.",
      outcome: "Less weekend panic when certificates or DNS records expire.",
      icon: icon(<Cable size={20} strokeWidth={1.6} />)
    },
    {
      title: "Care plans & small iterations",
      description:
        "Monthly tune-ups for dependencies, content swaps, and analytics spot checks after launch.",
      outcome: "Your site keeps pace with the business instead of drifting stale.",
      icon: icon(<Wrench size={20} strokeWidth={1.6} />)
    }
  ],
  ctaTitle: "Share your URL, your audience, and your deadline.",
  ctaSubtitle:
    "We will respond with a short scope options list—quick wins first, larger rework second.",
  mailtoSubject: "Haque Web Services inquiry"
};

export const cybersecuritySolutionsConfig: CompanyMicrositeConfig = {
  slug: "cybersecurity-solutions",
  seoTitle: "Cybersecurity Solutions & Consultation – Practical risk reduction",
  seoDescription:
    "Security assessments, hardening guidance, policy templates, and tabletop exercises for teams that need clarity without fear-mongering.",
  navBrandBefore: "Cybersecurity ",
  navBrandAccent: "Solutions & Consultation",
  heroEyebrow: "Assessments · Hardening · Readiness",
  heroTitleBefore: "Security advice you can act on—",
  heroTitleAccent: "without the theater.",
  heroLead:
    "We map what actually matters for your size and sector, prioritize fixes by risk and effort, and leave you with written guidance your IT partner or internal admin can execute.",
  servicesEyebrow: "How we help",
  servicesTitle: "Defense in depth, explained in plain terms.",
  servicesSubtitle:
    "Less generic “best practice” PDFs; more specific controls tied to how your business runs day to day.",
  services: [
    {
      title: "Risk & posture assessments",
      description:
        "Identity, endpoints, email, backups, and remote access reviewed against realistic threats—not compliance checkbox bingo.",
      outcome: "A ranked backlog your leadership can fund in sensible slices.",
      icon: icon(<FileSearch size={20} strokeWidth={1.6} />)
    },
    {
      title: "Hardening playbooks",
      description:
        "MFA rollout, admin separation, patching windows, logging, and vendor access—documented so they survive staff turnover.",
      outcome: "Smaller blast radius when credentials leak or a laptop walks away.",
      icon: icon(<ShieldCheck size={20} strokeWidth={1.6} />)
    },
    {
      title: "Policy & awareness kits",
      description:
        "Acceptable use, remote work, and incident reporting templates your team can adopt without a six-month rewrite project.",
      outcome: "Employees know what to do before lawyers or insurers ask.",
      icon: icon(<Lock size={20} strokeWidth={1.6} />)
    },
    {
      title: "Identity & access hygiene",
      description:
        "SSO decisions, group design, shared account elimination, and break-glass procedures that fit your tooling.",
      outcome: "Fewer standing admin rights and clearer audit trails.",
      icon: icon(<KeyRound size={20} strokeWidth={1.6} />)
    },
    {
      title: "Incident readiness",
      description:
        "Tabletop scenarios, comms trees, and backup restore drills tuned to your actual dependencies.",
      outcome: "Calmer first hours when something real happens.",
      icon: icon(<MonitorSmartphone size={20} strokeWidth={1.6} />)
    },
    {
      title: "Vendor & stack reviews",
      description:
        "SaaS configuration checks, integration risks, and data residency questions framed for non-specialist owners.",
      outcome: "Purchases you will not regret at renewal time.",
      icon: icon(<UserCheck size={20} strokeWidth={1.6} />)
    }
  ],
  ctaTitle: "Describe your environment and what keeps you up at night.",
  ctaSubtitle:
    "We will propose a compact assessment or workshop—scoped, priced, and sequenced before we touch production systems.",
  mailtoSubject: "Cybersecurity consultation request"
};
