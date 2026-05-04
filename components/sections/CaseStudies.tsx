import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

type CaseStudy = {
  sector: string;
  title: string;
  body: string;
  metric: string;
  metricLabel: string;
};

// Illustrative engagements—replace with real client write-ups when available.
const cases: CaseStudy[] = [
  {
    sector: "Professional services · 35 staff",
    title: "Office relocation without losing a day",
    body: "Replaced ageing switches, ran cabling, and migrated phones and Wi-Fi over a single weekend cutover. New site documented end-to-end before staff arrived Monday.",
    metric: "0 hrs",
    metricLabel: "of unplanned downtime on cutover"
  },
  {
    sector: "Healthcare back-office · 12 staff",
    title: "Hardening + backup baseline",
    body: "Rolled out MFA, endpoint protection, and a tested off-site backup. Established a quarterly review cadence and an incident playbook the team could actually run.",
    metric: "—98%",
    metricLabel: "drop in successful phishing attempts (90 days)"
  }
];

export default function CaseStudies() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-width space-y-12">
        <SectionTitle
          eyebrow="Recent engagements"
          title="Boring is the goal. Boring works."
          subtitle="A look at the kind of work we do—measured by outcomes, not buzzwords."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c, idx) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="card p-6 sm:p-8 flex flex-col gap-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                {c.sector}
              </p>
              <h3 className="font-heading text-2xl text-ink">{c.title}</h3>
              <p className="text-sm text-mute">{c.body}</p>
              <div className="hairline pt-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-heading text-3xl text-accent leading-none">
                    {c.metric}
                  </p>
                  <p className="text-xs text-mute mt-2 max-w-[18rem]">
                    {c.metricLabel}
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:text-accent-dark"
                >
                  Discuss your project
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
