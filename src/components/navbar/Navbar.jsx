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
          <a href="#">
            {" "}
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            {" "}
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            {" "}
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
