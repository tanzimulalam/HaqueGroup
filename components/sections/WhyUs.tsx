import { motion } from "framer-motion";
import { Clock3, ShieldCheck, Users, Workflow } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const stats = [
  { value: "10+", label: "Years combined experience" },
  { value: "24h", label: "Typical response time" },
  { value: "100%", label: "Documented handovers" },
  { value: "1:1", label: "Senior engineer on every account" }
];

const points = [
  {
    icon: <Clock3 size={18} strokeWidth={1.6} />,
    title: "Senior people on the front line",
    body: "You talk to the engineer doing the work—not a layer of account managers."
  },
  {
    icon: <ShieldCheck size={18} strokeWidth={1.6} />,
    title: "Security-first by default",
    body: "Hardening, MFA, backups, and patching baked into how we deliver, not sold as add-ons."
  },
  {
    icon: <Workflow size={18} strokeWidth={1.6} />,
    title: "Clear documentation",
    body: "Runbooks, network diagrams, and asset inventories—so nothing lives only in someone's head."
  },
  {
    icon: <Users size={18} strokeWidth={1.6} />,
    title: "Right-sized engagements",
    body: "Project, retainer, or fractional CIO—we scope to what you actually need this quarter."
  }
];

export default function WhyUs() {
  return (
    <section className="section-padding py-20 md:py-28 bg-sand">
      <div className="max-width space-y-12">
        <SectionTitle
          eyebrow="Why us"
          title="Steady delivery beats flashy promises."
          subtitle="We earn our seat at the table by being calm, accountable, and easy to work with—week after week."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="card-soft p-5"
            >
              <p className="font-heading text-3xl text-accent">{stat.value}</p>
              <p className="text-sm text-mute mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <ul className="grid md:grid-cols-2 gap-x-10 gap-y-6">
          {points.map((point, idx) => (
            <motion.li
              key={point.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="flex gap-4"
            >
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white border border-line text-accent"
              >
                {point.icon}
              </span>
              <div className="space-y-1">
                <h3 className="font-heading text-lg text-ink">{point.title}</h3>
                <p className="text-sm text-mute">{point.body}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
