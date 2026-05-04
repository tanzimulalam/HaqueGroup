import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  outcome?: string;
  index: number;
}

export default function ServiceCard({
  icon,
  title,
  description,
  outcome,
  index
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="card p-6 hover:shadow-soft hover:border-accent/30 transition-[box-shadow,border-color] duration-200"
    >
      <div className="flex items-start gap-4">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
        >
          {icon}
        </span>
        <div className="space-y-2">
          <h3 className="font-heading text-xl text-ink">{title}</h3>
          <p className="text-sm text-mute">{description}</p>
          {outcome && (
            <p className="text-sm text-ink">
              <span className="text-accent font-medium">Outcome: </span>
              {outcome}
            </p>
          )}
        </div>
      </div>
    </motion.article>
  );
}
