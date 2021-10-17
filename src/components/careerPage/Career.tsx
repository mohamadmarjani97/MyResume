import React from "react";
import { motion } from "framer-motion";
import { enterToGate } from "../../utils/animation";
const Career: React.FC = (): JSX.Element => {

  return (
    <motion.div layout initial="hidden" animate="visible" variants={enterToGate}
    className="text-9xl">
      <div>hello we are in hooommmmmmmmeeeeee body</div>
      <div>we're going to do verrrrrrrrrry interesting stuff interesting </div>
    </motion.div>
  );
};

export default Career;
