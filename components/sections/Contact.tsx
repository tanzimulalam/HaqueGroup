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

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      formEl.reset();
    }, 400);
    setTimeout(() => setStatus("idle"), 6000);
  };

  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-width grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <SectionTitle
            eyebrow="Contact"
            title="Tell us what you&rsquo;re working on."
            subtitle="Most projects start with a 30-minute conversation. We&rsquo;ll come back with a clear, written next step."
          />

          <div className="space-y-3">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-3 card p-4 hover:border-accent/40 transition-colors"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                <Mail size={16} strokeWidth={1.6} />
              </span>
              <span className="text-sm">
                <span className="block text-xs uppercase tracking-[0.18em] text-mute">
                  Email
                </span>
                <span className="text-ink">{CONTACT_EMAIL}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 card p-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent-soft text-accent">
                <MapPin size={16} strokeWidth={1.6} />
              </span>
              <span className="text-sm">
                <span className="block text-xs uppercase tracking-[0.18em] text-mute">
                  Location
                </span>
                <span className="text-ink">{LOCATION}</span>
              </span>
            </div>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="card p-6 sm:p-7 space-y-4"
          aria-label="Contact form"
          noValidate
        >
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-medium text-mute mb-1.5 uppercase tracking-[0.14em]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-md bg-cream border border-line px-3 py-2.5 text-sm text-ink placeholder:text-mute outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-xs font-medium text-mute mb-1.5 uppercase tracking-[0.14em]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-md bg-cream border border-line px-3 py-2.5 text-sm text-ink placeholder:text-mute outline-none focus:border-accent focus:ring-1 focus:ring-accent"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-mute mb-1.5 uppercase tracking-[0.14em]"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-md bg-cream border border-line px-3 py-2.5 text-sm text-ink placeholder:text-mute outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex items-center justify-center gap-2 w-full rounded-md bg-accent text-white text-sm font-medium py-2.5 hover:bg-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <Send size={15} />
            {status === "sending" ? "Opening your email…" : "Send message"}
          </button>

          <p className="text-[11px] text-mute">
            This form opens your default email client with the message
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
              <p className="text-xs text-accent">
                Thanks—your email client should be open. We&apos;ll respond
                shortly.
              </p>
            )}
            {status === "error" && error && (
              <p className="text-xs text-red-700">{error}</p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
