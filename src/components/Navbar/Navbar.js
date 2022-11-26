import NavItem from "./NavItem/NavItem";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <NavItem
          title="Home"
          to="home"
          offset={-150}
        />
        <NavItem
          title="About"
          to="about"
          offset={50}
        />
        <NavItem
          title="Skills"
          to="skills"
          offset={50}
        />
        <NavItem
          title="Projects"
          to="projects"
          offset={50}
        />
        <NavItem
          title="Contact"
          to="contact"
          offset={50}
        />
      </ul>
    </nav>
  );
}

export default Navbar;