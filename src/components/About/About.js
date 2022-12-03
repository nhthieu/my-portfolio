import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from 'framer-motion';
import "./About.css";

function About() {
  const [ref, inView, entry] = useInView({ threshold: 0.35 });
  const titleVariants = {
    hidden: {
      opacity: 0,
      x: "10vw",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      }
    }
  }

  // These are the variants for the images that will be animated with varied delays
  const getImageVariants = (delay) => ({
    hidden: {
      opacity: 0,
      x: "-10vw",
      transition: {
        duration: 1,
        ease: "easeInOut",
        // delay: delay,
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: delay,
      }
    },
  })

  const getParagraphVariants = (delay) => ({
    hidden: {
      opacity: 0,
      y: "-10vh",
      transition: {
        duration: 1,
        ease: "easeInOut",
        // delay: delay,
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: delay,
      }
    },
  })

  return (
    <Element name="about">
      <section className="about row" ref={ref}>
        <motion.div
          className="about__title"
          variants={titleVariants}
          animate={inView ? "visible" : "hidden"}
        >
          <span >about me</span>
        </motion.div>
        <div className="about__content col-10">
          <div
            className="about__gallery"
          >
            <motion.div
              className="img-1 span-2"
              variants={getImageVariants(0.2)}
              animate={inView ? "visible" : "hidden"}
            // whileHover={{ scale: 1.05 }}
            >
              <img src={require("../../assets/band.png")} className="about__gallery--img" alt="me" />
            </motion.div>
            <motion.div
              className="img-2 span-2 tall-2"
              animate={inView ? "visible" : "hidden"}
              variants={getImageVariants(0.1)}
            >
              <img src={require("../../assets/profile.jpg")} className="about__gallery--img img-2 span-2 tall-2" alt="me" />
            </motion.div>
            <motion.div
              className="img-3"
              animate={inView ? "visible" : "hidden"}
              variants={getImageVariants(0.4)}
            >
              <img src={require("../../assets/guitar.png")} className="about__gallery--img img-2" alt="me" />
            </motion.div>
            <motion.div
              className="img-4"
              animate={inView ? "visible" : "hidden"}
              variants={getImageVariants(0.3)}
            >
              <img src={require("../../assets/coding.png")} className="about__gallery--img img-2" alt="me" />
            </motion.div>
          </div>

          <div className="about__text">
            <div className="about__text-introduction">
              <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={getParagraphVariants(0.1)}
              >
                hi!</motion.h1>
              <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={getParagraphVariants(0.2)}
              >
                <p>
                  my name is <span className="about__text-introduction-name">Hieu Nguyen</span> and i'm a Junior at VNHCMUS.
                </p>
                <p>i major in Technology & Information and currently learning for future web development.</p>
              </motion.div>
            </div>
            <div className="about__text-info-wrapper">
              <div className="about__text-info">
                <motion.p
                  animate={inView ? "visible" : "hidden"}
                  variants={getParagraphVariants(0.3)}
                >
                  <span>age: </span>{new Date().getFullYear() - 2002}
                </motion.p>
                <motion.p
                  animate={inView ? "visible" : "hidden"}
                  variants={getParagraphVariants(0.4)}
                >
                  <span>phone: </span> +84777058016
                </motion.p>
                <motion.p
                  animate={inView ? "visible" : "hidden"}
                  variants={getParagraphVariants(0.5)}
                >
                  <span>place: </span> Ho Chi Minh, Vietnam
                </motion.p>
                <motion.p
                  animate={inView ? "visible" : "hidden"}
                  variants={getParagraphVariants(0.6)}
                >
                  <span>email: </span> nguyenhotrunghieu0106@gmail.com
                </motion.p>
              </div>
              <motion.a
                href={require("../../assets/document/cv.txt")}
                download="my_cv"
                className="about__text-download"
                animate={inView ? "visible" : "hidden"}
                variants={getParagraphVariants(0.7)}
              >
                <div className="about__text-btn-resume">
                  resume
                </div>
              </motion.a>
            </div>
          </div>
        </div>
        {/* <div className="about__footer">

        </div> */}
      </section>
    </Element >
  );
}

export default About;