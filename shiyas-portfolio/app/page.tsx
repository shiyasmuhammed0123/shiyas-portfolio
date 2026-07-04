import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import Process from "@/components/Process";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Services />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Testimonials />
        <Process />
        <Insights />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
