import "./App.css";
import AboutMe from "./assets/components/AboutMe";
import Contact from "./assets/components/contact";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
import Projects from "./assets/components/Projects";

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact-me">
        <Contact />
      </section>
    </div>
  );
}

export default App;
