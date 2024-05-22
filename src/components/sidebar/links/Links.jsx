import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = ({ setOpen }) => {
  const items = ["HomePage", "About", "Projects", "Contact"];
  const handleClick = (item, e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
    document.getElementById(`${item}`).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          // href={`#${item}`}
          onClick={(e) => handleClick(item, e)}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95,}}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
