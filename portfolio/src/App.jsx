import "./styles/global.css";
import useActiveSection from "./hooks/useActiveSection";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Connect from "./components/Connect/Connect";
import Footer from "./components/Footer/Footer";

export default function App() {
  const activeSection = useActiveSection();

  return (
    <div>
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
