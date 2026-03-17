import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("success");
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section className="section-padding py-20 md:py-24 bg-bgDark/95">
      <div className="max-width grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Talk"
            subtitle="Ready to take your IT to the next level? Reach out and we’ll respond with a tailored next step."
          />
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              Whether you&apos;re troubleshooting a single issue or planning a
              full-scale infrastructure upgrade, we&apos;re here to help.
            </p>
            <p>
              Based in{" "}
              <span className="text-accent">Woodbridge, VA 22193</span>,
              partnering with businesses locally and beyond.
            </p>
            <p>
              Email:{" "}
              <span className="text-accent">haque8consulting@gmail.com</span>
            </p>
          </div>
        </div>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-6 space-y-4"
          aria-label="Contact form"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-300 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-300 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 text-sm outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center w-full rounded-full bg-gradient-to-r from-accent to-accentPurple text-bgDark text-sm font-medium py-2 shadow-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bgDark"
          >
            Send Message
          </button>
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs text-accent mt-2"
            >
              Thank you! Your message has been received. We&apos;ll be in touch
              shortly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}

