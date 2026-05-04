import {
  ShieldCheck,
  Server,
  Wrench,
  Code2,
  Network,
  Headset
} from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Hardware & helpdesk",
    description:
      "Workstations, servers, and peripherals—procured, deployed, and supported.",
    outcome: "Less downtime; faster response when something breaks.",
    icon: <Wrench size={20} strokeWidth={1.6} />
  },
  {
    title: "Software & integrations",
    description:
      "Operating systems, line-of-business apps, and tying tools together cleanly.",
    outcome: "Fewer manual handoffs and a single source of truth.",
    icon: <Code2 size={20} strokeWidth={1.6} />
  },
  {
    title: "Managed support",
    description:
      "Friendly, expert helpdesk for your team—remote first, on-site when it matters.",
    outcome: "A predictable SLA your staff can actually rely on.",
    icon: <Headset size={20} strokeWidth={1.6} />
  },
  {
    title: "Cybersecurity",
    description:
      "Hardening, audits, monitoring, and incident response aligned to your risk.",
    outcome: "Tangible reduction in attack surface and incident dwell time.",
    icon: <ShieldCheck size={20} strokeWidth={1.6} />
  },
  {
    title: "Networks",
    description:
      "Wired, wireless, and VPN—designed and tuned to scale with your business.",
    outcome: "Reliable connectivity at every site, with clear documentation.",
    icon: <Network size={20} strokeWidth={1.6} />
  },
  {
    title: "Data center operations",
    description:
      "On-prem and hybrid environments managed with discipline and clear runbooks.",
    outcome: "Predictable change windows; no more tribal knowledge.",
    icon: <Server size={20} strokeWidth={1.6} />
  }
];

export default function Services() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-width space-y-12">
        <SectionTitle
          eyebrow="What we do"
          title="Practical IT support, built around outcomes."
          subtitle="A focused set of services for growing businesses—no jargon, no scope creep, just steady delivery."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
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
  );
}
