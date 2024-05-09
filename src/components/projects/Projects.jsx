import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "BABYUP ",
    description:
      "Mobile application offering easy-to-make, nutritious meals tailored for babies based on their age and allergies, simplifying meal preparation for young parents.",
    img: "BABYUP.png",
    technologies: "Developed with React Native and Firebase.",
    git:"https://github.com/noafadida/BabyUp"
  },
  {
    id: 2,
    title: "Admin Dashboard Application",
    description:
      "React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More.",
    img: "ADMINDASHBOARD.png",
    technologies: "Developed with React.js Syncfusion and Mongodb.",
    git:"https://github.com/noafadida/AdminDashboardShop"
  },
  {
    id: 3,
    title: "BrideToBe ",
    description:
      "A Wedding Bride Salon system that is used to schedule appointments and fully manages the reservation, including statistics about the website usage.",
    img: "BRIDETOBE.png",
    technologies:
      "Developed with React.js, Node.js (Express),CSS ,MongoDB. CircleCi Heroku ESLint Prettier Npm package manager Mocha test frameworkfor NodeJS Chai assertion library for NodeJS.",
    git:"https://github.com/noafadida/BrideToBe"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={`/${item.img}`} alt="" />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.technologies}</p>
            <button onClick={()=>window.open(item.git)}>See More </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="projects" ref={ref} id="Projects">
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Projects;
