import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  index
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass-panel rounded-2xl p-5 relative overflow-hidden group"
    >
      <div className="pointer-events-none absolute inset-px rounded-2xl border border-transparent group-hover:neon-border opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="flex items-start gap-4 relative z-10">
        <motion.div
          whileHover={{ scale: 1.15, rotate: 3 }}
          className="text-accent"
        >
          {icon}
        </motion.div>
        <div>
          <h3 className="font-heading text-base sm:text-lg mb-1">{title}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>
      </div>
    </motion.article>
  );
}

