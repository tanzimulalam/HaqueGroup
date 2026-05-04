import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const CONTACT_EMAIL = "haque8consulting@gmail.com";
const LOCATION = "Woodbridge, VA 22193";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="section-padding py-8">
        <div className="max-width grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-xs text-gray-400">
          <div className="space-y-2">
            <p className="font-heading text-sm tracking-[0.2em] uppercase text-white">
              <span className="text-accent">Haque</span> Consultancy
            </p>
            <p>
              Reliable IT consulting—hardware, software, cybersecurity, and
              networks—for growing businesses.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
              Contact
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail size={14} />
              <span>{CONTACT_EMAIL}</span>
            </a>
            <p className="flex items-center gap-2">
              <MapPin size={14} />
              <span>{LOCATION}</span>
            </p>
          </div>

          <div className="space-y-2 sm:text-right">
            <p className="text-[11px] uppercase tracking-[0.2em] text-gray-500 sm:text-right">
              Connect
            </p>
            <div className="flex items-center gap-3 sm:justify-end">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-accent transition-colors"
                aria-label="Email Haque Consultancy"
              >
                <Mail size={16} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn (coming soon)"
              >
                <Linkedin size={16} />
              </a>
              <a
                href="https://github.com/tanzimulalam/HaqueGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={16} />
              </a>
            </div>
            <a
              href="#home"
              className="block hover:text-accent transition-colors sm:text-right"
            >
              Back to top ↑
            </a>
          </div>
        </div>

        <div className="max-width mt-6 pt-4 border-t border-white/5 text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {year} Haque Consultancy. All rights reserved.</p>
          <p>Built with Next.js · Tailwind · Three.js</p>
        </div>
      </div>
    </footer>
  );
}
