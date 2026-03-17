import dynamic from "next/dynamic";
import SectionTitle from "../ui/SectionTitle";

const AboutNetwork = dynamic(
  () => import("../three/AboutNetwork"),
  { ssr: false }
);

export default function About() {
  return (
    <section className="section-padding py-20 md:py-24 bg-bgDark/95">
      <div className="max-width grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <SectionTitle
            eyebrow="About"
            title="About Haque Consultancy"
            subtitle="Driven by innovation, grounded in experience. We help you turn complex IT challenges into straightforward, sustainable solutions."
          />
          <p className="text-sm sm:text-base text-gray-300">
            Based in Woodbridge, VA, we&apos;re a team of passionate IT
            professionals dedicated to delivering reliable, secure, and
            innovative solutions. Though Haque Consultancy is a new brand,
            our combined experience spans years in the industry. We treat every
            client like a partner, ensuring your technology works seamlessly so
            you can focus on your business.
          </p>
          <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm">
            <div className="glass-panel rounded-2xl p-3">
              <p className="font-heading text-xl text-accent">10+</p>
              <p className="text-gray-300">Years combined experience</p>
            </div>
            <div className="glass-panel rounded-2xl p-3">
              <p className="font-heading text-xl text-accentPurple">25+</p>
              <p className="text-gray-300">Projects delivered</p>
            </div>
            <div className="glass-panel rounded-2xl p-3">
              <p className="font-heading text-xl text-white">100%</p>
              <p className="text-gray-300">Client-first mindset</p>
            </div>
          </div>
        </div>
        <AboutNetwork />
      </div>
    </section>
  );
}

