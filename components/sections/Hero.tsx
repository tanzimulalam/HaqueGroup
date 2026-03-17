import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import AnimatedButton from "../ui/AnimatedButton";

const HeroBackground = dynamic(
  () => import("../three/HeroBackground"),
  { ssr: false }
);

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (!titleRef.current) return;
    const letters = titleRef.current.querySelectorAll("span.char");
    anime({
      targets: letters,
      opacity: [0, 1],
      translateY: [12, 0],
      easing: "easeOutQuad",
      duration: 900,
      delay: anime.stagger(40)
    });
  }, []);

  const headingText = "Haque Consultancy";

  return (
    <section className="relative min-h-[100vh] flex items-center section-padding pt-24 pb-24">
      <HeroBackground />
      <div className="max-width grid md:grid-cols-[minmax(0,1.6fr),minmax(0,1fr)] gap-10 items-center relative z-10">
        <div className="space-y-6">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Woodbridge, VA • Next-Gen IT Solutions
          </p>
          <h1
            ref={titleRef}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
            aria-label={headingText}
          >
            {headingText.split("").map((char, index) => (
              <span
                key={`${char}-${index}`}
                className={`char inline-block ${
                  char === " " ? "w-2 sm:w-3" : ""
                }`}
              >
                {char}
              </span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-sm sm:text-base text-gray-300 max-w-xl"
          >
            Empowering your business with secure, scalable, and reliable IT
            infrastructure—from hardware and software to cybersecurity, network
            architecture, and data center operations—right from Woodbridge, VA.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xs sm:text-sm text-gray-400"
          >
            Hardware • Software • Cybersecurity • Network • Data Center
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            <AnimatedButton href="#services">Explore Services</AnimatedButton>
            <AnimatedButton href="#contact" variant="outline">
              Contact Us
            </AnimatedButton>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden md:block"
        >
          <div className="glass-panel rounded-3xl p-6 animate-pulse-soft">
            <p className="text-xs font-medium text-accent mb-2">
              Trusted IT Partner
            </p>
            <p className="text-sm text-gray-200 mb-4">
              Proactive monitoring, rapid incident response, and strategic
              consulting to keep your business always-on and secure.
            </p>
            <div className="grid grid-cols-3 gap-3 text-xs text-gray-300">
              <div>
                <p className="text-2xl font-heading text-accent">24/7</p>
                <p>Support Readiness</p>
              </div>
              <div>
                <p className="text-2xl font-heading text-accentPurple">
                  10+
                </p>
                <p>Years Combined</p>
              </div>
              <div>
                <p className="text-2xl font-heading text-white">100%</p>
                <p>Client Focused</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

