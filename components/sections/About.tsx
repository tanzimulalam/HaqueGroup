import { motion } from "framer-motion";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section className="section-padding py-20 md:py-28">
      <div className="max-width grid md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-7 space-y-6">
          <SectionTitle
            eyebrow="About"
            title="A small, deliberate consultancy."
            subtitle="Based in Woodbridge, Virginia—serving clients across the DMV and beyond."
          />
          <div className="space-y-4 text-base text-mute max-w-prose">
            <p>
              Haque Consultancy was founded on a simple idea: most businesses
              don&apos;t need bigger IT, they need calmer IT. Fewer surprises,
              clearer ownership, and senior people who can translate between
              what the technology is doing and what the business actually
              needs.
            </p>
            <p>
              The brand is new, but the team isn&apos;t. Our combined
              experience spans years of running infrastructure, securing it,
              and rebuilding it when someone else didn&apos;t.
            </p>
          </div>
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-5 card p-6 space-y-5"
        >
          <p className="text-xs font-medium tracking-[0.18em] uppercase text-mute">
            How we work
          </p>
          <ul className="space-y-4 text-sm text-ink">
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-medium">Discovery first.</strong>{" "}
                <span className="text-mute">
                  We listen, audit, and document before we recommend anything.
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-medium">Vendor-neutral.</strong>{" "}
                <span className="text-mute">
                  No kickbacks, no preferred-partner pressure—just the right
                  tool for the job.
                </span>
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
              <span>
                <strong className="font-medium">Documented handover.</strong>{" "}
                <span className="text-mute">
                  When we leave, you can keep running without us.
                </span>
              </span>
            </li>
          </ul>
        </motion.aside>
      </div>
    </section>
  );
}
