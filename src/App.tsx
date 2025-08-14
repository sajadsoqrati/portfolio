import "./App.css";
import Header from "./assets/components/Header";
import Home from "./assets/components/Home";

function App() {
  return (
    <div>
      <Header />
      <section id="home">
        <Home />
      </section>
    </div>
  );
}

export default App;
