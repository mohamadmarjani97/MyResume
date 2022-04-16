import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { RefObject } from "react";
import { useOnScrollAnimation } from "../../../hooks/useOnScrollAnimation";
import { publicationsData } from "../../../store/allData";
import { secFading } from "../../../utils/animation";
import EachPub from "./EachPub";

interface props {
  publicationsRef: RefObject<HTMLDivElement>;
}
const Publication: React.FC<props> = ({publicationsRef}) => {
  const [sec, controls] = useOnScrollAnimation();

  return (
    <motion.div
      ref={publicationsRef}

      className=" flex flex-col justify-start items-start "
    >
      <motion.h2   ref={sec}    variants={secFading}
      initial="hidden"
      animate={controls} className="!text-3xl !font-bold sm:!text-5xl">
        Publications & Posters
      </motion.h2>
      <ul className="flex flex-col gap-y-10 w-11/12">
        {publicationsData.map((pub) => {
          return <EachPub pub={pub} />;
        })}
      </ul>
    </motion.div>
  );
};

export default Publication;
