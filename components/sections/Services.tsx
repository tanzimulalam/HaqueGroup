import { ShieldCheck, Server, Wrench, BugPlay, Network, Headset } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ServiceCard from "../ui/ServiceCard";

const services = [
  {
    title: "Hardware Support",
    description: "Rapid diagnosis and repair for workstations, servers, and peripherals to minimize downtime.",
    icon: <Wrench size={26} />
  },
  {
    title: "Software Troubleshooting",
    description: "From OS issues to line-of-business apps, we resolve software problems with precision.",
    icon: <BugPlay size={26} />
  },
  {
    title: "IT Helpdesk & Support",
    description: "Friendly, expert support for your team—remote or on-site—when they need it most.",
    icon: <Headset size={26} />
  },
  {
    title: "Cybersecurity Consulting",
    description: "Protect your business with best-practice security hardening, audits, and monitoring.",
    icon: <ShieldCheck size={26} />
  },
  {
    title: "Network Setup & Optimization",
    description: "Design, deploy, and optimize secure networks built to scale with your business.",
    icon: <Network size={26} />
  },
  {
    title: "Data Center Operations",
    description: "Resilient, well-documented on-prem and hybrid data center management.",
    icon: <Server size={26} />
  }
];

export default function Services() {
  return (
    <section className="section-padding py-20 md:py-24 bg-bgDark">
      <div className="max-width space-y-10">
        <SectionTitle
          eyebrow="Our Expertise"
          title="Comprehensive IT support tailored to your needs."
          subtitle="From everyday troubleshooting to mission-critical infrastructure, Haque Consultancy delivers reliable, secure solutions."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

