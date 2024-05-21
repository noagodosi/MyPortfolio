import { motion } from "framer-motion";

import "./hero.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="containerBg">
          <div className="heroImg">
            <img src="/hero3.png" />
            <div className="img2">
              <img src="/img2.png" />
            </div>
          </div>

          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={textVariants}>NOA</motion.h1>
            <motion.h1 variants={textVariants}>Full Stack Engineer</motion.h1>
            <h2>
              {" "}
              I am Software Engineering graduate and full-stack web & mobile
              developer.
            </h2>

            <motion.div className="buttons" variants={textVariants}>
              <motion.button
                variants={textVariants}
                onClick={() => {
                  document.getElementById("Projects").scrollIntoView();
                }}
              >
                See My Latest Projects
              </motion.button>
              <motion.button
                variants={textVariants}
                onClick={() =>
                  document.getElementById("Contact").scrollIntoView()
                }
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
