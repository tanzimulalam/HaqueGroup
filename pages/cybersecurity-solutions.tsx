import Head from "next/head";
import CompanyMicrosite from "../components/brands/CompanyMicrosite";
import { cybersecuritySolutionsConfig } from "../lib/companyMicrositeData";

export default function CybersecuritySolutionsPage() {
  return (
    <>
      <Head>
        <title>{cybersecuritySolutionsConfig.seoTitle}</title>
        <meta
          name="description"
          content={cybersecuritySolutionsConfig.seoDescription}
        />
      </Head>
      <CompanyMicrosite config={cybersecuritySolutionsConfig} />
    </>
  );
}
