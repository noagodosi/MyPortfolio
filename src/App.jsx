import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="HomePage" >
        <Navbar />
        <Hero />
      </section>

      <section id="About">
        <About />
      </section>

      <Projects >
        <section id="1"></section>
        <section id="2"></section>
        <section id="3"></section>
      </Projects>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
