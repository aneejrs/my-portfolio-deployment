import Navbar from "../../Components/Navbar";
import Hero from "../../Components/Hero";
import About from "../../Components/About";
import Skills from "../../Components/Skill";
import Certifications from "../../Components/Certifications";
import Experience from "../../Components/Experience";
import Projects from "../../Components/Project";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}