import Head from "next/head";
import CompanyMicrosite from "../components/brands/CompanyMicrosite";
import { haqueWebServicesConfig } from "../lib/companyMicrositeData";

export default function HaqueWebServicesPage() {
  return (
    <>
      <Head>
        <title>{haqueWebServicesConfig.seoTitle}</title>
        <meta name="description" content={haqueWebServicesConfig.seoDescription} />
      </Head>
      <CompanyMicrosite config={haqueWebServicesConfig} />
    </>
  );
}
