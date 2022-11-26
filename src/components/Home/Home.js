import { Element } from "react-scroll";
import Typer from "./Typer";
import "./Home.css";

function Home() {
  return (
    <Element name="home">
      <div className="home">
        <div className="home__introduction">
          <div className="home__introduction-greetings">
            <h1>Hello, I'm <span className="home__introduction-name">Hieu Nguyen</span></h1>
          </div>
          <Typer
            prefix="I'm into"
            texts={["Web Developing", "Backend Programming", "Frontend Programming", "Algorithms"]}
          />
          <div className="home__introduction-job">
            <p className="home__introduction-job-title">&lt;BackendDeveloper /&gt;</p>
          </div>
          <div className="home__introduction-contact-btn"></div>
        </div>
        <div className="home__avatar"></div>
      </div>
    </Element>
  );
}

export default Home;