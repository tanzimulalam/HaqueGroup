import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import SectionTitle from "../ui/SectionTitle";

const companies = [
  {
    name: "DTD Tech Support",
    description:
      "Door-to-door and day-to-day help—software installs, hardware setup, printers, Wi‑Fi, and the computer problems that eat your afternoon.",
    href: "/dtd-tech-support/",
    cta: "Visit DTD Tech Support"
  },
  {
    name: "Haque Web Services & Solutions",
    description:
      "Fast, accessible sites, performance passes, and integration guidance—scoped so you can ship, measure, and maintain without a research project.",
    href: "/haque-web-services/",
    cta: "Visit Web Services"
  },
  {
    name: "Cybersecurity Solutions & Consultation",
    description:
      "Practical assessments, hardening playbooks, and readiness workshops—prioritized by real risk, written so your team can execute.",
    href: "/cybersecurity-solutions/",
    cta: "Visit Cybersecurity"
  }
];

export default function CompaniesIntro() {
  return (
    <section
      id="companies"
      className="section-padding py-20 md:py-28 border-t border-line bg-sand"
    >
      <div className="max-width space-y-12">
        <SectionTitle
          eyebrow="Our companies"
          title="Three focused practices under one roof."
          subtitle="Pick the lane that matches what you need today—each team shares the same standards and the same calm way of working."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {companies.map((company, index) => (
            <motion.article
              key={company.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              className="card p-6 flex flex-col gap-4 h-full hover:shadow-soft hover:border-accent/30 transition-[box-shadow,border-color] duration-200"
            >
              <div className="space-y-2 flex-1">
                <h3 className="font-heading text-xl text-ink">{company.name}</h3>
                <p className="text-sm text-mute">{company.description}</p>
              </div>
              <Button
                href={company.href}
                variant="primary"
                ariaLabel={company.cta}
                className="w-full sm:w-auto"
              >
                {company.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
