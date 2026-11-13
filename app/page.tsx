import Header from "@/components/Header";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-6 md:px-10">
        <Intro />
        <About />
        {/* Experience and Stack share a row on wide screens, stacked on small ones. */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-x-16">
          <Experience />
          <Skills />
        </div>
        <Projects />
        <Writing />
        <Contact />
      </main>
    </>
  );
}
