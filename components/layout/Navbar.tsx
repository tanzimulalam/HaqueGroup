import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why us", href: "#why" },
  { label: "Case studies", href: "#cases" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        scrolled || open
          ? "bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80 border-b border-line"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="max-width flex h-16 items-center justify-between">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="font-heading text-lg text-ink"
            aria-label="Haque Consultancy home"
          >
            Haque <span className="text-accent">Consultancy</span>
          </a>

          <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-mute hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href="#contact" variant="primary" ariaLabel="Book a free consultation">
              Book a consultation
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-line text-ink hover:bg-sand transition-colors"
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
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.18 }}
            aria-label="Mobile"
            className="md:hidden border-t border-line bg-cream/95 backdrop-blur"
          >
            <div className="section-padding py-3">
              <ul className="max-width flex flex-col">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-3 text-base text-ink hover:bg-sand transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="mt-2">
                  <Button
                    href="#contact"
                    variant="primary"
                    className="w-full"
                  >
                    Book a consultation
                  </Button>
                </li>
              </ul>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
