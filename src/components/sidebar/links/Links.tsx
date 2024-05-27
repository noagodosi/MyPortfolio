import { Variants, motion } from "framer-motion";

const variants: Variants = {
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

interface LinksProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Links: React.FC<LinksProps> = ({ setOpen }) => {
  const items: string[] = ["HomePage", "About", "Projects", "Contact"];
  const handleClick = (item: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen((prev: boolean) => !prev);
    document?.getElementById(`${item}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item: string) => (
        <motion.a
          // href={`#${item}`}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleClick(item, e)}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95, }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
