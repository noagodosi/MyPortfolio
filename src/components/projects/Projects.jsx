import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";
import { useRef } from "react";

const items = [
  {
    id: "1",
    title: "BabyUp ",
    description:
      "Mobile application offering easy-to-make, nutritious meals tailored for babies based on their age and allergies, simplifying meal preparation for young parents.",
    img: "BABYUP.png",
    technologies: "Developed with React Native and Firebase.",
    git: "https://github.com/noafadida/BabyUp",
  },
  {
    id: "2",
    title: "Admin Dashboard Application",
    description:
      "React Admin Dashboard App With Theming, Tables, Charts, Calendar, Kanban and More.",
    img: "ADMINDASHBOARD.png",
    technologies:
      "Developed with React.js, TypeScript, Syncfusion and Mongodb.",
    git: "https://github.com/noafadida/AdminDashboardShop",
  },
  {
    id: "3",
    title: "BrideToBe ",
    description:
      "A Wedding Bride Salon system that is used to schedule appointments and fully manages the reservation, including statistics about the website usage.",
    img: "BRIDETOBE.png",
    technologies: "Developed with React.js, Node.js, CSS, MongoDB. ",
    git: "https://github.com/noafadida/BrideToBe",
  },
];

const itemVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      // staggerChildren: 0.6,
    },
  },
  button: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.4,
    },
  },
};

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.section
      id={item.id}
      variants={itemVariants}
      initial="initial"
      whileInView="animate"
    >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <motion.img
              src={`/${item.img}`}
              variants={itemVariants}
              initial="initial"
              whileInView="animate"
            />
          </div>

          <motion.div
            className="textContainer"
            style={{ y }}
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
          >
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>{item.technologies}</p>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              onClick={() => window.open(item.git)}
            >
              See More
              <b> 》》</b>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.section>
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
        <h2>MY PROJECTS</h2>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} id={item.id} />
      ))}
    </div>
  );
};

export default Projects;
