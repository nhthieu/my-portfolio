import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from '../../ThemeContext';
import Signature from "../Signature";
import Navbar from "../Navbar/Navbar";
import "./Header.css"

function Header() {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const icon = theme === 'light' ? faMoon : faSun;

  return (
    <header className="header">
      <div className="header__signature">
        <Signature headerSignature />
      </div>
      <div className="header__navbar-wrapper">
        <Navbar />
        <div onClick={toggleTheme} className="header__theme-switch">
          <FontAwesomeIcon className="theme-switch-icon" icon={icon} />
        </div>
      </div>
    </header>
  );
}

export default Header;