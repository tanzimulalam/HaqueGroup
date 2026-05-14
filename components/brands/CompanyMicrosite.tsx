import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CompanyMicrositeConfig } from "../../lib/companyMicrositeData";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";
import CompanyFooter from "./CompanyFooter";
import CompanyNavbar from "./CompanyNavbar";

const CONTACT_EMAIL = "haque8consulting@gmail.com";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 }
};

interface CompanyMicrositeProps {
  config: CompanyMicrositeConfig;
}

export default function CompanyMicrosite({ config }: CompanyMicrositeProps) {
  const displayName = `${config.navBrandBefore}${config.navBrandAccent}`.trim();
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    config.mailtoSubject
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <CompanyNavbar
        brandBefore={config.navBrandBefore}
        brandAccent={config.navBrandAccent}
      />
      <main className="flex-1">
        <section
          id="top"
          className="relative section-padding pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(30,30,30,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,30,30,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          />
          <div className="max-width relative space-y-6">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-prose space-y-5"
            >
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                {config.heroEyebrow}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl text-ink leading-[1.05]">
                {config.heroTitleBefore}
                <span className="italic text-accent">{config.heroTitleAccent}</span>
              </h1>
              <p className="text-lg text-mute">{config.heroLead}</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={mailto}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium bg-accent text-white hover:bg-accent-dark border border-accent hover:border-accent-dark transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  Email us to get started
                  <ArrowRight size={16} aria-hidden="true" />
                </a>
                <Link
                  href="/#contact"
                  prefetch={false}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium bg-transparent text-ink hover:bg-sand border border-line transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
                >
                  Main site contact
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="services"
          className="section-padding py-20 md:py-28 bg-sand border-y border-line/70"
        >
          <div className="max-width space-y-12">
            <SectionTitle
              eyebrow={config.servicesEyebrow}
              title={config.servicesTitle}
              subtitle={config.servicesSubtitle}
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {config.services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  outcome={service.outcome}
                  icon={service.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding py-16 md:py-20 bg-accent text-white">
          <div className="max-width grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-2">
              <h2 className="font-heading text-3xl sm:text-4xl text-white">
                {config.ctaTitle}
              </h2>
              <p className="text-base text-white/85 max-w-prose">
                {config.ctaSubtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={mailto}
                className="inline-flex items-center gap-2 rounded-md bg-white text-accent-dark px-5 py-2.5 text-sm font-medium hover:bg-cream transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                Send email
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <Link
                href="/#contact"
                prefetch={false}
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
              >
                Open main contact form
              </Link>
            </div>
          </div>
        </section>
      </main>
      <CompanyFooter displayName={displayName} />
    </div>
  );
}
