import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

import "./navbar.scss";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <Sidebar />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          NOA GODOSI
        </motion.span>
        <div className="social">
          <a href="https://github.com/noagodosi">
            {" "}
            <img src="/git.png" alt="" />
          </a>

          <a href="https://www.linkedin.com/in/noa-godosi-35ba73216/">
            {" "}
            <img src="/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/noafadida/">
            {" "}
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
