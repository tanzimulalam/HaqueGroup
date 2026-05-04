import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import AnimatedButton from "../ui/AnimatedButton";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on Escape, lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-colors ${
        scrolled || open
          ? "bg-bgDark/85 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="max-width flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-heading text-base sm:text-lg tracking-[0.2em] uppercase text-white"
            aria-label="Haque Consultancy home"
          >
            <span className="text-accent">Haque</span> Consultancy
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <AnimatedButton href="#contact" ariaLabel="Get in touch">
              Get in Touch
            </AnimatedButton>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-white/10 text-gray-200 hover:text-accent hover:border-accent/40 transition-colors"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            key="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            aria-label="Mobile"
            className="md:hidden border-t border-white/5 bg-bgDark/95 backdrop-blur-md"
          >
            <div className="section-padding py-4">
              <ul className="max-width flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base text-gray-200 hover:text-accent hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block w-full text-center rounded-full bg-gradient-to-r from-accent to-accentPurple text-bgDark text-sm font-medium py-2 shadow-neon"
                  >
                    Get in Touch
                  </a>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
