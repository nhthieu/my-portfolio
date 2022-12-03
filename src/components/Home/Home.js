import { useContext } from "react";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
import { ScrollYContext } from "../../ScrollYContext";

import Signature from "../Signature";
import Typer from "./Typer";
import "./Home.css";

function Home() {
  // const offsetY = useContext(ScrollYContext).offsetY;
  const animationTime = 2;

  return (
    <Element name="home">
      <section className="home row">
        <motion.div
          className="home__logo"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: animationTime }}
        >
          <div className="home__logo-content">
            <Signature
              homeSignature={true}
            />
          </div>
        </motion.div>

        <motion.div
          className="home__introduction col-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: animationTime }}
        >
          <div className="home__introduction-greetings">
            <motion.h1
              initial={{ y: "-10vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: animationTime }}
            >
              hello, i'm
            </motion.h1>
            <motion.h1
              className="home__introduction-name"
              initial={{ y: "-12vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.25 + animationTime }}
            >
              Hieu Nguyen
            </motion.h1>
          </div>
          <motion.div
            initial={{ y: "-14vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 + animationTime }}
          >
            <Typer
              prefix="i'm into"
              texts={["Web Developing", "Programming", "Algorithms"]}
            />
          </motion.div>
          <motion.div
            className="home__introduction-job"
            initial={{ y: "-16vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.75 + animationTime }}
          >
            <p className="home__introduction-job-title">&lt;ITStudent /&gt;</p>
          </motion.div>
          <div className="home__introduction-contact-btn"></div>
        </motion.div>
        {/* <div className="home__avatar"></div> */}
        <motion.div
          className="home__scroll"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: animationTime }}
        >
          <p>SCROLL</p>
          <div className="home__scroll-icon">
            <div className="home__scroll-icon-line"></div>
          </div>
        </motion.div>
      </section>

    </Element>
  );
}

export default Home;