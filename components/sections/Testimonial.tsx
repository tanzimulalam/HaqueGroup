import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="section-padding py-20 md:py-24 bg-sand">
      <div className="max-width">
        <motion.figure
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center space-y-6"
        >
          <Quote
            size={28}
            strokeWidth={1.4}
            className="mx-auto text-accent"
            aria-hidden="true"
          />
          <blockquote className="font-heading text-2xl sm:text-3xl text-ink leading-snug">
            “They quietly raised our security baseline, fixed the things that
            had been ignored for years, and never once made it feel like a
            sales pitch.”
          </blockquote>
          <figcaption className="text-sm text-mute">
            <span className="text-ink font-medium">Operations Director</span>
            {" · "}Professional services firm, Northern Virginia
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
