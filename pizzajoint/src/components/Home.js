import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { easeInOut } from "@popmotion/easing";
import Loader from "./Loader";

const nextButtonVariant = {
  show: {
    x: -20,
    transition: {
      delay: 2,
    },
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: Infinity,
      //   repeat: 10,
      //   repeatType: "reverse",
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};
const Home = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="home container"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button
          variants={nextButtonVariant}
          animate="show"
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader />
    </motion.div>
  );
};

export default Home;
