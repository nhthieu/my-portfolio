import { useContext } from "react";
import { Element } from "react-scroll";
import { ScrollYContext } from "../../ScrollYContext";

import Signature from "../Signature";
import Typer from "./Typer";
import "./Home.css";

function Home() {
  const offsetY = useContext(ScrollYContext).offsetY;

  return (
    <Element name="home">
      <div className="home row">
        <div className="home__logo">
          <div className="home__logo-content">
            <Signature
              homeSignature={true}
            />
          </div>
        </div>

        <div className="home__introduction col-6">
          <div className="home__introduction-greetings">
            <h1>hello, i'm</h1>
            <h1 className="home__introduction-name">Hieu Nguyen</h1>
          </div>
          <Typer
            prefix="i'm into"
            texts={["Web Developing", "Programming", "Algorithms"]}
          />
          <div className="home__introduction-job">
            <p className="home__introduction-job-title">&lt;ITStudent /&gt;</p>
          </div>
          <div className="home__introduction-contact-btn"></div>
        </div>
        {/* <div className="home__avatar"></div> */}
        <div className="home__scroll">
          <p>SCROLL</p>
          <div className="home__scroll-icon">
            <div className="home__scroll-icon-line"></div>
          </div>
        </div>
      </div>

    </Element>
  );
}

export default Home;