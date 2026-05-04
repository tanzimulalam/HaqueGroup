import Head from "next/head";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page Not Found · Haque Consultancy</title>
      </Head>
      <main className="min-h-screen flex items-center justify-center section-padding bg-bgDark text-white">
        <div className="max-w-md text-center space-y-4">
          <p className="text-xs font-medium tracking-[0.3em] uppercase text-accent">
            Error 404
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl">
            Lost in the network
          </h1>
          <p className="text-sm text-gray-300">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s route you home.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-medium bg-gradient-to-r from-accent to-accentPurple text-bgDark shadow-neon"
          >
            Back to home
          </Link>
        </div>
      </main>
    </>
  );
}
