import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import "../styles/globals.css";
import Cursor from "../components/layout/Cursor";

const SEO_CONFIG = {
  title: "Haque Consultancy – IT Solutions & Consulting",
  description:
    "Hardware, software, cybersecurity, and network support for modern businesses.",
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "Haque Consultancy"
  }
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...SEO_CONFIG} />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}

