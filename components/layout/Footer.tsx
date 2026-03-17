import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-16">
      <div className="section-padding py-6">
        <div className="max-width flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {year} Haque Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="#home"
              className="hover:text-accent transition-colors"
              aria-label="Back to top"
            >
              Back to top
            </a>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </button>
              <button
                type="button"
                className="hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </button>
              <button
                type="button"
                className="hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

