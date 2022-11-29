import { Element } from "react-scroll";
import SlickSlider from "../SlickSlider";
import "./About.css";

function About({ offsetY }) {
  return (
    <Element name="about">
      <div className="about">
        <div className="about__content">
          {/* <SlickSlider /> */}
        </div>
        <div className="about__footer">

        </div>
      </div>
    </Element>
  );
}

export default About;