import { useState, useContext } from 'react';
import classNames from 'classnames';
import { ThemeContext } from '../../ThemeContext';
import SocialItem from '../SocialItem';
import Drawer from '../Drawer';
// import Navbar from '../Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Sidebar.css";

function Sidebar() {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(() => {
    return theme === 'dark';
  });


  const icon = theme === 'light' ? faMoon : faSun;
  const overlayClass = classNames({
    "sidebar__overlay": true,
    "sidebar__overlay--open": open,
  });

  const handleChange = () => {
    // setChecked(!checked);
    toggleTheme();
  }

  const toggleMenu = () => {
    setOpen(!open);
  }

  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <div className="sidebar__header">
          <div className="sidebar__menu-toggle" onClick={toggleMenu}>
            <span>MENU</span>
          </div>
          <div className="theme-switch__wrapper" onClick={handleChange}>
            <FontAwesomeIcon className="theme-switch__icon" icon={icon} />
          </div>
        </div>

        <div className="sidebar__footer">
          <div className="sidebar__socials">
            <ul className="social__list">
              <SocialItem
                icon={faLinkedinIn}
                link="https://www.linkedin.com/in/nhthieu16/"
              />
              <SocialItem
                icon={faGithub}
                link="https://github.com/nhthieu/"
              />
              <SocialItem
                icon={faEnvelope}
                link="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenhotrunghieu0106@gmail.com"
              />
            </ul>
          </div>
        </div>
      </div>
      <Drawer
        open={open}
      />
      <div className={overlayClass} onClick={toggleMenu}></div>
    </div>
  );
}

export default Sidebar;