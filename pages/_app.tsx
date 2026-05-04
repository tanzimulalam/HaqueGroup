import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import "../styles/globals.css";
import Cursor from "../components/layout/Cursor";

const SITE_URL = "https://haqueconsultancy.com";

const SEO_CONFIG = {
  titleTemplate: "%s | Haque Consultancy",
  defaultTitle: "Haque Consultancy – IT Solutions & Consulting",
  description:
    "Haque Consultancy delivers hardware, software, cybersecurity, network, and data center support for modern businesses—based in Woodbridge, VA.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    site_name: "Haque Consultancy",
    title: "Haque Consultancy – IT Solutions & Consulting",
    description:
      "Hardware, software, cybersecurity, network, and data center support for modern businesses.",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Haque Consultancy"
      }
    ]
  },
  twitter: {
    cardType: "summary_large_image"
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Haque Consultancy, IT consulting, cybersecurity, network setup, data center, Woodbridge VA, IT support, hardware support, software troubleshooting"
    },
    { name: "author", content: "Haque Consultancy" }
  ]
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo {...SEO_CONFIG} />
      <Cursor />
      <Component {...pageProps} />
    </>
  );
}
