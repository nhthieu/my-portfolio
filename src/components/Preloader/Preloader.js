import React, { useState, useEffect } from "react";
import classNames from "classnames";
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
      <svg width="390" height="199" viewBox="0 0 390 199" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="signature" d="M88 2C80.2566 23.5999 75.486 46.5725 68.5556 68.5C59.3636 97.5827 54.3748 136.072 30.9445 158C26.3939 162.259 20.5036 165.708 14.5556 167.611C9.8039 169.132 10.3653 164.018 10.2222 160.556C9.30708 138.409 40.3566 132.552 56.8889 128.222C72.9374 124.019 89.3456 121.129 105.667 118.222C118.423 115.951 132.375 112.5 145.444 112.778C149.993 112.875 139.87 118.859 139 119.444C132.447 123.853 125.748 128.059 119.222 132.5C117.648 133.571 101.255 147.815 108.333 145.111C110.884 144.137 137.584 131.718 138.333 133.667C139.476 136.638 131.083 144.772 138.389 143.278C145.203 141.884 151.379 138.208 157.889 135.889C161.931 134.449 166.211 133.838 170.222 132.333C171.274 131.939 186.424 124.915 186.556 125.222C186.773 125.73 185.941 127.747 186.167 128.611C187.227 132.675 191.333 132.993 194.889 132.556C202.26 131.649 223.215 124.504 216.722 128.111C213.393 129.961 207.87 134 214.778 134C227.37 134 239.963 134 252.556 134C259.348 134 266.272 133.618 273.056 134.056C276.492 134.277 273.074 135.463 272 136" stroke="black" strokeWidth="3" strokeLinecap="round" />
        <path id="signature-underline" d="M2 197C6.14678 193.775 10.6207 192.959 15.8333 192C32.5327 188.929 49.658 187.993 66.5556 186.778C124.112 182.639 181.551 176.82 239.111 172.889C288.43 169.521 338.529 167 388 167" stroke="black" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export default Preloader;