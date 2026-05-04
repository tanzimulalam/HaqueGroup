import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import Head from "next/head";
import { Inter, Newsreader } from "next/font/google";
import "../styles/globals.css";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans"
});

const heading = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-heading",
  // Newsreader isn't in Next's font-override metrics DB; opt out of the
  // size-adjust optimisation rather than emit a build-time warning. We
  // already use `display: "swap"`, so CLS is bounded by Tailwind's line-height.
  adjustFontFallback: false,
  fallback: ["Georgia", "Cambria", "Times New Roman", "serif"]
});

const SITE_URL = "https://haque-consulting.com";

const SEO_CONFIG = {
  titleTemplate: "%s | Haque Consultancy",
  defaultTitle: "Haque Consultancy – IT Solutions & Consulting",
  description:
    "Practical IT consulting for growing businesses—infrastructure, software, cybersecurity, and networks. Based in Woodbridge, VA.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    site_name: "Haque Consultancy",
    title: "Haque Consultancy – IT Solutions & Consulting",
    description:
      "Practical IT consulting for growing businesses—infrastructure, software, cybersecurity, and networks.",
    images: [
      {
        url: `${SITE_URL}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Haque Consultancy"
      }
    ]
  },
  twitter: { cardType: "summary_large_image" },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "Haque Consultancy, IT consulting, cybersecurity, networks, data center, Woodbridge VA, IT support, hardware, software"
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
      <div className={`${sans.variable} ${heading.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
