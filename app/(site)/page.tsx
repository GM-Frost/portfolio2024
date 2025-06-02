export const dynamic = "force-dynamic";

import About from "@/components/About";
import ContactPage from "@/components/ContactPage";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import { personalQuery } from "../lib/queries";
import { sanityClient } from "../lib/sanity";

export default async function Home() {
  const personalInfo = await sanityClient.fetch(personalQuery);

  return (
    <main>
      <Hero personalInfo={personalInfo} />
      <About />
      <Services />
      <Works />
      <ContactPage />
    </main>
  );
}
