import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "./components/About";
import Skills from "@/app/components/Skills";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
