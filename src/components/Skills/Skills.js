import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import Percentage from "./Percentage";
import "./Skills.css";

function Skills() {
  return (
    <Element name="skills">
      <div className="skills">
        <div className="skills__content">
          <div className="skills__title">
            <span>skills</span>
          </div>
          <div className="skills__details">
            <div className="skills__item-wrapper">

            </div>
            <div className="skills__blank">
              <div className="skills__blank-head"></div>
              <div className="skills__blank-body"></div>
            </div>
            <div className="skills__item-wrapper">
            </div>
          </div>
          <div className="skills__footer"></div>
        </div>
      </div>
    </Element>
  );
}

export default Skills;