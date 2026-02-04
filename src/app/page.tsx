import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Certifications } from "@/components/Certifications";
import { BeyondTheScreen } from "@/components/BeyondTheScreen";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <BeyondTheScreen />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
