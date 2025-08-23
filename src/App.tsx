import "./App.css";
import AboutMe from "./assets/components/AboutMe";
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
      <section id="projects"></section>
      <Projects />
    </div>
  );
}

export default App;
