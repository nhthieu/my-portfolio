import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Signature from "../Signature";
import Navbar from "../Navbar/Navbar";

import "./Header.css"

function Header() {
  return (
    <header className="header">
      <div className="header__signature">
        <Signature headerSignature />
      </div>
      <div className="header__navbar-wrapper">
        <Navbar />
        <div className="header__theme-switch">
          <FontAwesomeIcon className="theme-switch-icon" icon={faMoon} />
        </div>
      </div>

    </header>
  );
}

export default Header;