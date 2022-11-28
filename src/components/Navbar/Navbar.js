import { useState, useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
import NavItem from "./NavItem/NavItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun, faHouse, faUser, faBolt, faLaptopCode, faAt } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

function Navbar() {
  const theme = useContext(ThemeContext).theme;
  const toggleTheme = useContext(ThemeContext).toggleTheme;
  const [checked, setChecked] = useState(() => {
    return theme === 'dark';
  });
  const icon = theme === 'light' ? faMoon : faSun;

  const handleChange = () => {
    setChecked(!checked);
    toggleTheme();
  }

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavItem
          type="link"
          icon={<FontAwesomeIcon icon={faHouse} />}
          title="Home"
          to="home"
          offset={0}
        />
        <NavItem
          type="link"
          icon={<FontAwesomeIcon icon={faUser} />}
          title="About"
          to="about"
          offset={50}
        />
        <NavItem
          type="link"
          icon={<FontAwesomeIcon icon={faBolt} />}
          title="Skills"
          to="skills"
          offset={50}
        />
        <NavItem
          type="link"
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
          title="Projects"
          to="projects"
          offset={50}
        />
        <NavItem
          type="link"
          icon={<FontAwesomeIcon icon={faAt} />}
          title="Contact"
          to="contact"
          offset={50}
        />
        <NavItem
          type="a"
          icon={<FontAwesomeIcon icon={icon} />}
          changeTheme={handleChange}
        />
      </ul>
    </nav>
  );
}

export default Navbar;