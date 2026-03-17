import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const team = [
  {
    name: "Mohammad Alam",
    role: "Founder, CEO & Lead Consultant",
    bio: "Leads overall vision, strategy, and high-impact consulting across infrastructure, networking, and cybersecurity."
  },
  {
    name: "Anamika Rashid",
    role: "Co-Founder",
    bio: "Co-leads the direction of Haque Consultancy and supports client relationships, planning, and delivery."
  },
  {
    name: "Tasnimul Alam",
    role: "Technical Director & Software Consultant",
    bio: "Designs and builds reliable software systems, integrates business applications, and oversees technical delivery."
  },
  {
    name: "Tanzimul Fahim",
    role: "Operations Head & Cybersecurity Consultant",
    bio: "Keeps day-to-day operations running smoothly while advising on security posture, incident response, and compliance."
  }
];

export default function Team() {
  return (
    <section className="section-padding py-20 md:py-24 bg-bgDark">
      <div className="max-width space-y-10">
        <SectionTitle
          eyebrow="Team"
          title="Meet the Founders"
          subtitle="A small, focused team with deep experience in keeping business-critical systems online."
          align="center"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {team.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ rotateY: 3, y: -6 }}
              className="glass-panel rounded-3xl p-6 text-center relative overflow-hidden group"
            >
              <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-accent to-accentPurple flex items-center justify-center text-bgDark font-heading text-xl">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-heading text-lg mb-1">{member.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-300 mb-4">{member.bio}</p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="text-xs text-accentPurple"
              >
                LinkedIn profile (coming soon)
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

