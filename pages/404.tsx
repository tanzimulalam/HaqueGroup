import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found · Haque Consultancy</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center section-padding bg-cream text-ink">
        <div className="max-w-md text-center space-y-4">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
            Error 404
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl">
            We can&apos;t find that page.
          </h1>
          <p className="text-base text-mute">
            The link may be broken or the page may have moved. Let&apos;s get
            you back home.
          </p>
          <div className="pt-2">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-md bg-accent text-white px-5 py-2.5 text-sm font-medium hover:bg-accent-dark transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
