import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <div>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">About</section>
      <section id="Projects"><Projects/></section>
      <section></section>
      <section></section>
      <section></section>
      
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
