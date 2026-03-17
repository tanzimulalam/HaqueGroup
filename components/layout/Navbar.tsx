import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 ${
        scrolled ? "bg-bgDark/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="section-padding">
        <div className="max-width flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-heading text-lg tracking-[0.2em] uppercase text-white"
            aria-label="Haque Consultancy home"
          >
            <span className="text-accent">Haque</span> Consultancy
          </a>
          <nav className="hidden md:flex items-center gap-8">
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
        </div>
      </div>
    </motion.header>
  );
}

