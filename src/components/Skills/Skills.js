import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import Percentage from "./Percentage";
import SkillsItem from "./SkillsItem";
import "./Skills.css";

function Skills() {
  return (
    <Element name="skills">
      <section className="skills">
        <div className="skills__content">
          <div className="skills__title">
            <span>skills</span>
          </div>
          <div className="skills__details">
            <div className="skills__item-wrapper">
              <div className="skills__item-title"><span>frontend</span></div>
              <ul className="skills__item-list">
                <SkillsItem title="react" percentage={65} />
                <SkillsItem title="js" percentage={85} />
                <SkillsItem title="html" percentage={90} />
                <SkillsItem title="css" percentage={80} />
                <SkillsItem title="figma" percentage={65} />
              </ul>
            </div>
            <div className="skills__blank">
              <div className="skills__blank-head"></div>
              <div className="skills__blank-body"></div>
            </div>
            <div className="skills__item-wrapper">
              <div className="skills__item-title"><span>backend</span></div>
              <ul className="skills__item-list">
                <SkillsItem title="express" percentage={70} />
                <SkillsItem title="python" percentage={70} />
                <SkillsItem title="mongo" percentage={75} />
                <SkillsItem title="js" percentage={85} />
                <SkillsItem title="java" percentage={60} />
              </ul>
            </div>
          </div>
          <div className="skills__footer"></div>
        </div>
      </section>
    </Element>
  );
}

export default Skills;