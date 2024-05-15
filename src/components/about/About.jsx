import { delay, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "./about.scss";

const textVariants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.1,
    },
  },
};

const projectsVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
      delay: 1,
    },
  },
};

const About = () => {
  const downloadPDF = () => {
    const pdfUrl = "./Noa_CV.pdf";
    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "Noa_CV.pdf");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };

  return (
    <motion.div
      className="about"
      id="About"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.h1 variants={textVariants} initial="initial"
      whileInView="animate">ABOUT ME</motion.h1>
      <motion.div initial="initial"
      whileInView="animate" className="textContainer" variants={textVariants}>
        <div className="title">
          <h2>NOA</h2>
          <h3>/ SOFTWARE ENGINEER</h3>
        </div>

        <div className="wrapper">
          <div className="profile">
            <h3>Hello, my name is Noa.</h3>
            <h4>
              I am Software Engineering graduate I am an full-stack web & mobile
              developer.
            </h4>
            <h4>
              Feel free to take a look at my latest projects on the web
              portfolio page.
            </h4>
            <h4>
              Available
              <a
                className="contactEmail"
                title="Contact Email"
                href="mailto:noago212@gmail.com"
              >
                noago212@gmail.com
              </a>
              <b className="cursor_">_</b>
            </h4>
          </div>
          <div className="buttons">
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              onClick={downloadPDF}
            >
              Download Resume
            </motion.button>
            <motion.button
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              onClick={() =>
                document.getElementById("Contact").scrollIntoView()
              }
            >
              Contact
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="buttomContainer"
        variants={projectsVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="titleContainer" variants={projectsVariants}>
          <h2>My Latest Projects ...</h2>
        </motion.div>
        <motion.div className="itemContainer" variants={projectsVariants}>
          <motion.div className="item">
            <h4>BrideToBe</h4>
            <a onClick={() => document.getElementById("3").scrollIntoView()}>
              See More
            </a>
            <img src="./BRIDETOBE.png" />
          </motion.div>
          <motion.div className="item" variants={projectsVariants}>
            <h4>BabyUp</h4>
            <a onClick={() => document.getElementById("1").scrollIntoView()}>
              See More
            </a>
            <img src="./BABYUP.png" />
          </motion.div>
          <motion.div className="item" variants={projectsVariants}>
            <h4>Admin Dashboard</h4>
            <a onClick={() => document.getElementById("2").scrollIntoView()}>
              See More
            </a>
            <img src="./ADMINDASHBOARD.png" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
