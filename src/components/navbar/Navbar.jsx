import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
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
          <a href="https://github.com/noafadida">
            {" "}
            <img src="/git.png" alt="" />
          </a>

          <a href="https://il.linkedin.com/in/noa-fadida-35ba73216?trk=people-guest_people_search-card">
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
