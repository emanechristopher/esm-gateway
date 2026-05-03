import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/esm/Navbar";
import { Hero } from "@/components/esm/Hero";
import { About } from "@/components/esm/About";
import { Services } from "@/components/esm/Services";
import { Partners } from "@/components/esm/Partners";
import { CaseStudies } from "@/components/esm/CaseStudies";
import { Charter } from "@/components/esm/Charter";
import { Contact } from "@/components/esm/Contact";
import { Footer } from "@/components/esm/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Partners />
      <CaseStudies />
      <Charter />
      <Contact />
      <Footer />
    </main>
  );
}

