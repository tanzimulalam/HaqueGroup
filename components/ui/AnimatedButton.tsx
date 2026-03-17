import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  ariaLabel?: string;
  variant?: "solid" | "outline";
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  ariaLabel,
  variant = "solid"
}: AnimatedButtonProps) {
  const baseClasses =
    "relative inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bgDark transition-colors";

  const solidClasses =
    "bg-gradient-to-r from-accent to-accentPurple text-bgDark shadow-neon";
  const outlineClasses =
    "border border-accent/60 text-accent hover:bg-accent/10";

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseClasses} ${
        variant === "solid" ? solidClasses : outlineClasses
      }`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    if (href.startsWith("#")) {
      return (
        <a href={href} aria-label={ariaLabel} className="inline-block">
          {content}
        </a>
      );
    }
    return (
      <Link href={href} aria-label={ariaLabel} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="inline-block"
    >
      {content}
    </button>
  );
}

