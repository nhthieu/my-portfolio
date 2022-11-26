import { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ReactSwitch from 'react-switch';
import { ThemeContext } from '../../ThemeContext';
import Signature from "../Signature";
import Navbar from "../Navbar/Navbar";
import "./Header.css"

function Header() {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  // const icon = theme === 'light' ? faMoon : faSun;
  const [checked, setChecked] = useState(() => {
    return theme === 'dark';
  });

  const handleChange = () => {
    setChecked(!checked);
    toggleTheme();
  }

  return (
    <header className="header">
      <div className="header__signature">
        <Signature headerSignature />
      </div>
      <div className="header__navbar-wrapper">
        <Navbar />
        <ReactSwitch
          className="header__theme-switch"
          onChange={handleChange}
          checked={checked}
          offColor="#121212"
          offHandleColor="#fefefe"
          onColor="#fefefe"
          onHandleColor="#121212"
          activeBoxShadow="0"
          checkedIcon={
            <div className="switch__icon">
              <FontAwesomeIcon
                className="theme-switch-icon"
                icon={faSun}
              />
            </div>}
          uncheckedIcon={
            <div className="switch__icon">
              <FontAwesomeIcon
                className="theme-switch-icon"
                icon={faMoon}
              />
            </div>}
        />
        {/* <div onClick={toggleTheme} className="header__theme-switch">
          <FontAwesomeIcon className="theme-switch-icon" icon={icon} />
        </div> */}
      </div>
    </header>
  );
}

export default Header;