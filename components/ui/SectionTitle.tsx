import { motion } from "framer-motion";

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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl text-ink max-w-prose">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-mute max-w-prose">{subtitle}</p>
      )}
    </motion.div>
  );
}
