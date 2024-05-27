import { Variants, motion } from "framer-motion";

import "./hero.scss";


const textVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    < div className="hero" >
      <div className="wrapper">
        <div className="containerBg">
          <div className="heroImg">
            <motion.img src="/hero3.png" variants={textVariants}
              initial="initial"
              animate="animate" />
            <motion.div className="img2" initial="initial"
              animate="animate" variants={textVariants}>
              <motion.img src="/img2.png" />
            </motion.div>
          </div>

          <motion.div
            className="textContainer"
            variants={textVariants}
            initial="initial"
            animate="animate"
          >
            <motion.h1 variants={textVariants}>NOA</motion.h1>
            <motion.h1 variants={textVariants}>Full Stack Engineer</motion.h1>
            <motion.h2 variants={textVariants}>
              {" "}
              I`m Software Engineer and full-stack web & mobile
              developer
            </motion.h2>

            <motion.div className="buttons" variants={textVariants}>
              <motion.button
                variants={textVariants}
                onClick={() => {
                  document?.getElementById("Projects")?.scrollIntoView();
                }}
              >
                See My Latest Projects
              </motion.button>
              <motion.button
                variants={textVariants}
                onClick={() =>
                  document?.getElementById("Contact")?.scrollIntoView()
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
