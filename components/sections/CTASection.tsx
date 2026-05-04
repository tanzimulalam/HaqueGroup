import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

export default function CTASection() {
  return (
    <section className="section-padding py-16 md:py-20 bg-accent text-white">
      <div className="max-width grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-2">
          <h2 className="font-heading text-3xl sm:text-4xl text-white">
            Let&apos;s talk about your project.
          </h2>
          <p className="text-base text-white/85 max-w-prose">
            Tell us where you&apos;re stuck. We&apos;ll come back with a clear,
            unbiased recommendation—free of charge.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-white text-accent-dark px-5 py-2.5 text-sm font-medium hover:bg-cream transition-colors"
          >
            Book a consultation
            <ArrowRight size={16} />
          </a>
          <a
            href="mailto:haque8consulting@gmail.com"
            className="inline-flex items-center gap-2 rounded-md border border-white/40 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Email us directly
          </a>
        </div>
      </div>
    </section>
  );
}
