import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const CONTACT_EMAIL = "haque8consulting@gmail.com";
const LOCATION = "Woodbridge, VA 22193";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const name = (formData.get("name") as string | null)?.trim() ?? "";
    const email = (formData.get("email") as string | null)?.trim() ?? "";
    const message = (formData.get("message") as string | null)?.trim() ?? "";

    if (!name || !email || !message) {
      setStatus("error");
      setError("Please fill out all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");

    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    // Open the user's default email client with a pre-populated message.
    // This is a no-backend fallback that always works.
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      formEl.reset();
    }, 400);
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section className="section-padding py-20 md:py-24 bg-bgDark/95">
      <div className="max-width grid md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="Contact"
            title="Let's Talk"
            subtitle="Ready to take your IT to the next level? Reach out and we'll respond with a tailored next step."
          />
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              Whether you&apos;re troubleshooting a single issue or planning a
              full-scale infrastructure upgrade, we&apos;re here to help.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-3 rounded-2xl glass-panel px-4 py-3 hover:border-accent/40 transition-colors"
            >
              <Mail size={18} className="text-accent" />
              <span className="text-sm">
                <span className="block text-xs uppercase tracking-[0.2em] text-gray-400">
                  Email
                </span>
                <span className="text-accent group-hover:underline">
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl glass-panel px-4 py-3">
              <MapPin size={18} className="text-accentPurple" />
              <span className="text-sm">
                <span className="block text-xs uppercase tracking-[0.2em] text-gray-400">
                  Location
                </span>
                <span className="text-white">{LOCATION}</span>
              </span>
            </div>
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
          noValidate
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
              autoComplete="name"
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
              autoComplete="email"
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
            disabled={status === "sending"}
            className="mt-2 inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-accent to-accentPurple text-bgDark text-sm font-medium py-2 shadow-neon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bgDark disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={16} />
            {status === "sending" ? "Opening your email…" : "Send Message"}
          </button>

          <p className="text-[11px] text-gray-500">
            This form will open your default email client with your message
            pre-filled. Prefer to email directly?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>

          <div role="status" aria-live="polite" className="min-h-[1.25rem]">
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-accent"
              >
                Thanks! Your email client should be open. We&apos;ll respond
                shortly.
              </motion.p>
            )}
            {status === "error" && error && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-xs text-red-400"
              >
                {error}
              </motion.p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
