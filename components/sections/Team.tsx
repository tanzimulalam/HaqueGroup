import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

type Member = {
  name: string;
  role: string;
  bio: string;
};

const founders: Member[] = [
  {
    name: "Mohammad Alam",
    role: "Founder, President & Lead Consultant",
    bio: "Leads vision, strategy, and senior delivery across infrastructure, networking, and cybersecurity."
  },
  {
    name: "Anamika Rashid",
    role: "Co-Founder & Vice President",
    bio: "Co-leads the firm, supports client relationships, and oversees planning and delivery."
  }
];

const directors: Member[] = [
  {
    name: "Tasnimul Alam",
    role: "Technical Director · Software",
    bio: "Designs reliable software systems, integrations, and tooling that operations teams can actually maintain."
  },
  {
    name: "Tanzimul Fahim",
    role: "Managing Director · Cybersecurity",
    bio: "Runs day-to-day operations and advises on security posture, incident response, and compliance."
  },
  {
    name: "Hiring",
    role: "Operations Manager",
    bio: "We're looking for a hands-on operations manager to coordinate delivery as the practice grows."
  }
];

function getInitials(name: string) {
  if (name.toLowerCase() === "hiring") return "+";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

interface MemberCardProps {
  member: Member;
  index: number;
}

function MemberCard({ member, index }: MemberCardProps) {
  const isVacant = member.name.toLowerCase() === "hiring";
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className={`card p-6 ${isVacant ? "border-dashed" : ""}`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          aria-hidden="true"
          className="h-11 w-11 rounded-full bg-accent-soft text-accent font-heading flex items-center justify-center"
        >
          {getInitials(member.name)}
        </div>
        <div>
          <h3 className="font-heading text-lg text-ink leading-tight">
            {member.name}
          </h3>
          <p className="text-xs uppercase tracking-[0.16em] text-mute mt-0.5">
            {member.role}
          </p>
        </div>
      </div>
      <p className="text-sm text-mute">{member.bio}</p>
    </motion.article>
  );
}

export default function Team() {
  return (
    <section className="section-padding py-20 md:py-28 bg-sand">
      <div className="max-width space-y-12">
        <SectionTitle
          eyebrow="Team"
          title="Senior people, accountable to you."
          subtitle="No layered account management—you talk to the engineers doing the work."
          align="center"
        />

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-mute text-center">
            Founders
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {founders.map((member, idx) => (
              <MemberCard key={member.name} member={member} index={idx} />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-mute text-center">
            Directors & Management
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {directors.map((member, idx) => (
              <MemberCard key={member.name} member={member} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
