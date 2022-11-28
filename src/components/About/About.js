import { Element } from "react-scroll";
import "./About.css";

function About({ offsetY }) {
  return (
    <Element name="about">
      <div className="about">
        <h1>About section</h1>
      </div>
    </Element>
  );
}

export default About;