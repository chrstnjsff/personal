import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutEducation } from "@/components/AboutEducation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-8">
        <Hero />
        <AboutEducation />
      </main>
      <Footer />
    </>
  );
}
