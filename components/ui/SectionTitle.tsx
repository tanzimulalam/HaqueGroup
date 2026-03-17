import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionTitleProps) {
  const alignment =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col gap-2 ${alignment}`}
    >
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.25em] uppercase text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-300 max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

