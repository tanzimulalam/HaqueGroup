import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import CompaniesIntro from "../components/sections/CompaniesIntro";
import Services from "../components/sections/Services";
import WhyUs from "../components/sections/WhyUs";
import CaseStudies from "../components/sections/CaseStudies";
import Testimonial from "../components/sections/Testimonial";
import About from "../components/sections/About";
import Team from "../components/sections/Team";
import CTASection from "../components/sections/CTASection";
import Contact from "../components/sections/Contact";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Haque Consultancy",
  description:
    "IT consulting firm offering hardware, software, cybersecurity, network, and data center support.",
  email: "haque8consulting@gmail.com",
  areaServed: "United States",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Woodbridge",
    addressRegion: "VA",
    postalCode: "22193",
    addressCountry: "US"
  },
  url: "https://haque-consulting.com",
  founder: [
    { "@type": "Person", name: "Mohammad Alam" },
    { "@type": "Person", name: "Anamika Rashid" }
  ]
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Haque Consultancy – IT Solutions & Consulting</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(STRUCTURED_DATA)
          }}
        />
      </Head>
      <div className="min-h-screen flex flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">
          <section id="home">
            <Hero />
          </section>
          <CompaniesIntro />
          <section id="services">
            <Services />
          </section>
          <section id="why">
            <WhyUs />
          </section>
          <section id="cases">
            <CaseStudies />
          </section>
          <Testimonial />
          <section id="about">
            <About />
          </section>
          <section id="team">
            <Team />
          </section>
          <CTASection />
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
