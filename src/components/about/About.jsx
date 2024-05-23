import { motion } from "framer-motion";

import "./about.scss";

const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      staggerChildren: 0.1,
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

  const handleContact = (e) => {
    e.preventDefault();
    document.getElementById("Contact").scrollIntoView({ block: "start" });
  };

  return (
    <motion.div
      className="about"
      // id="About"
      variants={textVariants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        initial="initial"
        whileInView="animate"
        className="textContainer"
        variants={textVariants}
      >
        <div className="title">
          <h2>NOA</h2>
          <h3>/ SOFTWARE ENGINEER</h3>
        </div>

        <div className="wrapper">
          <div className="profile">
            <h3>Hi, My Name Is NOA</h3>
            <h4>
              I`m
              <a className="textBold">Software Engineer</a>and full-stack
              web & mobile developer
            </h4>
            <h4>
              Feel free to take a look at my latest projects on the web
              portfolio page
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
          </div>
        </div>
      </motion.div>

      <motion.div
        className="buttomContainer"
        variants={textVariants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="titleContainer">
          <h2>My Latest </h2>
          <h2 className="h2Projects"> PROJECTS</h2>
          <h2>...</h2>
        </motion.div>
        <motion.div className="itemContainer">
          <motion.div className="item">
          <img src="./BRIDETOBE.png" />
            <h4>BrideToBe</h4>
            <a onClick={() => document.getElementById("3").scrollIntoView()}>
              See More
            </a>
           
          </motion.div>
          <motion.div className="item">
          <img src="./BABYUP.png" />
            <h4>BabyUp</h4>
            <a onClick={() => document.getElementById("1").scrollIntoView()}>
              See More
            </a>
           
          </motion.div>
          <motion.div className="item">
          <img src="./ADMINDASHBOARD.png" />
            <h4>Admin Dashboard</h4>
            <a onClick={() => document.getElementById("2").scrollIntoView()}>
              See More
            </a>
            
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
