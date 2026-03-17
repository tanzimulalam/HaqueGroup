import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

const founders = [
  {
    name: "Mohammad Alam",
    role: "Founder, President & Lead Consultant",
    bio: "Leads overall vision, strategy, and high-impact consulting across infrastructure, networking, and cybersecurity."
  },
  {
    name: "Anamika Rashid",
    role: "Co-Founder & Vice President",
    bio: "Co-leads the direction of Haque Consultancy and supports client relationships, planning, and delivery."
  }
];

const directorsAndManagement = [
  {
    name: "Tasnimul Alam",
    role: "Technical Director & Software Consultant",
    bio: "Designs and builds reliable software systems, integrates business applications, and oversees technical delivery."
  },
  {
    name: "Tanzimul Fahim",
    role: "Managing Director & Cybersecurity Consultant",
    bio: "Oversees operations at a strategic level while advising on security posture, incident response, and compliance."
  },
  {
    name: "Vacant Position",
    role: "Manager (Hiring Soon)",
    bio: "Future role to help coordinate projects, manage day-to-day delivery, and support our growing client base."
  }
];

export default function Team() {
  return (
    <section className="section-padding py-20 md:py-24 bg-bgDark">
      <div className="max-width space-y-10">
        <SectionTitle
          eyebrow="Team"
          title="Leadership & Founders"
          subtitle="A focused leadership team guiding Haque Consultancy across strategy, delivery, and security."
          align="center"
        />

        {/* Founders */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent text-center">
            Founders
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {founders.map((member, index) => (
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

        {/* Directors & Management */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-accent text-center">
            Directors & Management
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {directorsAndManagement.map((member, index) => (
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
      </div>
    </section>
  );
}

