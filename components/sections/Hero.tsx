import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section className="relative section-padding pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Calm decorative grid in the background—pure CSS, no canvas, no animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.45] [background-image:linear-gradient(to_right,rgba(30,30,30,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,30,30,0.04)_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
      />

      <div className="max-width relative grid md:grid-cols-12 gap-10 items-end">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-8 space-y-6"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            IT Consulting · Woodbridge, VA
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-ink leading-[1.05]">
            IT solutions that work—
            <span className="italic text-accent">without the noise.</span>
          </h1>
          <p className="text-lg text-mute max-w-prose">
            We help small and mid-sized businesses keep their systems secure,
            their teams productive, and their roadmap clear—so technology stops
            being something you worry about.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#contact" variant="primary">
              Book a free consultation
              <ArrowRight size={16} />
            </Button>
            <Button href="#cases" variant="secondary">
              See case studies
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="md:col-span-4 card p-6 space-y-4"
        >
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-mute">
            What we cover
          </p>
          <ul className="space-y-2 text-sm text-ink">
            {[
              "Hardware & helpdesk",
              "Software & integrations",
              "Cybersecurity & compliance",
              "Networks & data center"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="hairline pt-4 text-xs text-mute">
            Trusted by teams across the DMV area.
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
