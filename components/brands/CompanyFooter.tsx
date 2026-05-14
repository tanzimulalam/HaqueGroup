import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const CONTACT_EMAIL = "haque8consulting@gmail.com";
const LOCATION = "Woodbridge, VA 22193";

interface CompanyFooterProps {
  displayName: string;
}

export default function CompanyFooter({ displayName }: CompanyFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-cream border-t border-line">
      <div className="section-padding py-12">
        <div className="max-width flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-2">
            <p className="font-heading text-lg text-ink">{displayName}</p>
            <p className="text-sm text-mute max-w-prose">
              A division of{" "}
              <Link
                href="/"
                className="text-accent hover:text-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
                prefetch={false}
              >
                Haque Consultancy
              </Link>
              . Based in Woodbridge, Virginia.
            </p>
          </div>
          <ul className="space-y-2 text-sm text-ink">
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-mute shrink-0" strokeWidth={1.6} />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-accent transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-2 text-mute">
              <MapPin size={14} className="shrink-0" strokeWidth={1.6} />
              {LOCATION}
            </li>
          </ul>
        </div>
        <div className="max-width mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-mute">
          <p>
            © {year} {displayName}. All rights reserved.
          </p>
          <Link
            href="/#contact"
            prefetch={false}
            className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
          >
            Contact Haque Consultancy
          </Link>
        </div>
      </div>
    </footer>
  );
}
