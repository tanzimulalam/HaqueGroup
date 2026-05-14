import Head from "next/head";
import CompanyMicrosite from "../components/brands/CompanyMicrosite";
import { dtdTechSupportConfig } from "../lib/companyMicrositeData";

export default function DtdTechSupportPage() {
  return (
    <>
      <Head>
        <title>{dtdTechSupportConfig.seoTitle}</title>
        <meta name="description" content={dtdTechSupportConfig.seoDescription} />
      </Head>
      <CompanyMicrosite config={dtdTechSupportConfig} />
    </>
  );
}
