import Link from "next/link";

interface CompanyNavbarProps {
  brandBefore: string;
  brandAccent: string;
}

export default function CompanyNavbar({
  brandBefore,
  brandAccent
}: CompanyNavbarProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-cream/90 backdrop-blur supports-[backdrop-filter]:bg-cream/80 border-b border-line">
      <div className="section-padding">
        <div className="max-width flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="font-heading text-lg text-ink truncate focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            aria-label={`${brandBefore}${brandAccent} top of page`}
          >
            {brandBefore}
            <span className="text-accent">{brandAccent}</span>
          </a>
          <nav
            className="flex items-center gap-4 shrink-0"
            aria-label="Company microsite"
          >
            <Link
              href="/#services"
              className="hidden sm:inline text-sm text-mute hover:text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              Parent services
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-accent hover:text-accent-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-sm"
            >
              Haque Consultancy
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
