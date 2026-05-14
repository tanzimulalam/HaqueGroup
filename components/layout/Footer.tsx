import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const CONTACT_EMAIL = "haque8consulting@gmail.com";
const LOCATION = "Woodbridge, VA 22193";

const linkSections = [
  {
    title: "Practice",
    links: [
      { label: "Companies", href: "#companies" },
      { label: "Services", href: "#services" },
      { label: "Why us", href: "#why" },
      { label: "Case studies", href: "#cases" }
    ]
  },
  {
    title: "Firm",
    links: [
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
      { label: "DTD Tech Support", href: "/dtd-tech-support/" },
      { label: "Web Services & Solutions", href: "/haque-web-services/" },
      { label: "Cybersecurity", href: "/cybersecurity-solutions/" }
    ]
  }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-line">
      <div className="section-padding py-14">
        <div className="max-width grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-3">
            <p className="font-heading text-lg text-ink">
              Haque <span className="text-accent">Consultancy</span>
            </p>
            <p className="text-sm text-mute max-w-prose">
              Practical IT consulting for small and mid-sized businesses—
              hardware, software, cybersecurity, and networks. Based in
              Woodbridge, Virginia.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-mute hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="Email Haque Consultancy"
              >
                <Mail size={16} strokeWidth={1.6} />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-mute hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="LinkedIn (coming soon)"
              >
                <Linkedin size={16} strokeWidth={1.6} />
              </a>
              <a
                href="https://github.com/tanzimulalam/HaqueGroup"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-mute hover:text-accent hover:border-accent/40 transition-colors"
                aria-label="GitHub repository"
              >
                <Github size={16} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.title} className="md:col-span-2 space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-mute">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-ink hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.18em] text-mute">
              Reach us
            </p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-mute" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-accent transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-mute">
                <MapPin size={14} />
                {LOCATION}
              </li>
            </ul>
          </div>
        </div>

        <div className="max-width mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mute">
          <p>© {year} Haque Consultancy. All rights reserved.</p>
          <p>
            <a href="#home" className="hover:text-accent transition-colors">
              Back to top ↑
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
