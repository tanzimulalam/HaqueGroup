import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import About from "../components/sections/About";
import Team from "../components/sections/Team";
import Contact from "../components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Haque Consultancy – IT Solutions & Consulting</title>
      </Head>
      <div className="min-h-screen flex flex-col bg-bgDark text-white">
        <Navbar />
        <main className="flex-1 scroll-smooth">
          <section id="home" className="scroll-snap-start">
            <Hero />
          </section>
          <section id="services" className="scroll-snap-start">
            <Services />
          </section>
          <section id="about" className="scroll-snap-start">
            <About />
          </section>
          <section id="team" className="scroll-snap-start">
            <Team />
          </section>
          <section id="contact" className="scroll-snap-start">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

