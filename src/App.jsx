import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from './components/cursor/Cursor';
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <div>
       <Cursor/>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Projects">
      <Projects />
      </section>
        <section id='Project1'></section>
        <section id='Project2'></section>
        <section id='Project3'></section>
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
