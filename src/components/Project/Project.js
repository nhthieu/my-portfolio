import { useRef } from "react";
import "./Project.css"
import SlickSlider from "../SlickSlider";
import ProjectItem from "./ProjectItem";
import projects from "~/data/projects.json";

function Project() {
  const sliderRef = useRef(null);
  console.log(sliderRef.current);

  return (
    <section className="project">
      <div className="project__content">
        <div className="project__title-area">
          <div className="project__main-title">
            <span>what i have built</span>
          </div>
          <div className="slick__nav">
            <div
              className="slick__nav-box slick__nav-prev"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <div className="slick__arrow-prev slick__arrow">
                <svg width="81" height="16" viewBox="0 0 81 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="0.7" y1="15.6" x2="20.7" y2="0.6" />
                  <line x1="1" y1="15.5" x2="81" y2="15.5" />
                </svg>
              </div>
              <p>PREV</p>
            </div>
            <div className="slick__nav-line"></div>
            <div
              className="slick__nav-box slick__nav-next"
              onClick={() => sliderRef.current.slickNext()}
            >
              <p>NEXT</p>
              <div className="slick__arrow-next slick__arrow">
                <svg width="81" height="16" viewBox="0 0 81 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line y1="-0.5" x2="25" y2="-0.5" transform="matrix(-0.8 -0.6 -0.6 0.8 80 16)" />
                  <line y1="-0.5" x2="80" y2="-0.5" transform="matrix(-1 0 0 1 80 16)" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <SlickSlider ref={sliderRef}>
          {projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </SlickSlider>
      </div>
    </section>

  );
}

export default Project;