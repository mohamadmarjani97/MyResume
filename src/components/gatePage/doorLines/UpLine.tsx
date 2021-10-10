import { motion } from "framer-motion";
import { sportwaveAnimation } from "../../../utils/animation";

const UpLine: React.FC = (): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="359 207 812 243"
      className="overflow-visible"
      >
        <g>
      <pattern
        id="pat2"
        patternUnits="userSpaceOnUse"
        width="1200"
        height="700"
      >
        <image xlinkHref="/gate.jpg" width="1200" height="700" />
      </pattern>
      <filter id="inset-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feComponentTransfer in="SourceAlpha">
          <feFuncA type="table" tableValues="1 0" />
        </feComponentTransfer>
        <feGaussianBlur stdDeviation="2" />
        <feOffset dx="0" dy="-7" result="offsetblur" />
        <feFlood floodColor="rgb(0, 0, 0)" result="color" />
        <feComposite in2="offsetblur" operator="in" />
        <feComposite in2="SourceAlpha" operator="in" />
        <feMerge>
          <feMergeNode in="SourceGraphic" />
          <feMergeNode />
        </feMerge>
      </filter>
        <defs>
          <motion.path
            filter="url(#inset-shadow)"
            id="s-Path_1-d122"
            d="M1171.0 450.0 L824.3507718696401 315.82847341337913 L735.5240137221272 362.35677530017153 L360.4777015437396 208.6723842195541 "
          ></motion.path>
        </defs>
        <g>
          <use
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xlinkHref="#s-Path_1-d122"
            fill="none"
            strokeWidth="30.0"
            stroke="url(#pat2)"
            strokeLinecap="square"
            filter="none"
          ></use>
        </g>
      </g>
    </svg>
  );
};

export default UpLine;
