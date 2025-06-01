export const dynamic = "force-dynamic";

import About from "@/components/About";
import ContactPage from "@/components/ContactPage";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Works />
      <ContactPage />
    </main>
  );
}
