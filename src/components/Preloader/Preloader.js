import { useState, useEffect } from "react";
import classNames from "classnames";
import Signature from "../Signature";
import "./Preloader.css";

function Preloader({ timeToFadeOut, removePreloader }) {
  const [fadeOutPreloader, setFadeOutPreloader] = useState(false);
  const preloaderClass = classNames({
    "preloader": true,
    "preloader--hidden": fadeOutPreloader
  })

  // Set timeout to fade out preloader
  useEffect(() => {
    const id = setTimeout(() => {
      setFadeOutPreloader(true);
    }, timeToFadeOut);

    return () => {
      clearTimeout(id);
    }
  });

  return (
    <div className={preloaderClass} onTransitionEnd={removePreloader}>
      <Signature preloaderSignature />
    </div>
  );
}

export default Preloader;