import { useState, useEffect } from "react";
import classNames from "classnames";
import Signature from "../Signature";
import "./Preloader.css";

function Preloader({ timeToFadeOut, removePreloader }) {
  const [fadeOut, setFadeOut] = useState(false);
  const preloaderClass = classNames({
    "preloader": true,
    "fade-out": fadeOut
  })

  // Set timeout to fade out preloader
  useEffect(() => {
    const id = setTimeout(() => {
      setFadeOut(true);
    }, timeToFadeOut);

    return () => {
      clearTimeout(id);
    }
  }, [timeToFadeOut]);

  return (
    <div className={preloaderClass} onTransitionEnd={removePreloader}>
      <Signature preloaderSignature fadeOut={fadeOut} />
    </div>
  );
}

export default Preloader;