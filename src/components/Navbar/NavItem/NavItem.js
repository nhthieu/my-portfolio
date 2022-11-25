import { Link } from "react-scroll";
import "./NavItem.css";

function NavItem({
  title,
  to,
  offset,
}) {
  return (
    <li className="nav-item" >
      <Link
        className="nav-item__link"
        activeClass="active"
        to={to} spy={true}
        smooth={true}
        offset={offset}
        duration={500}>{title}</Link>
    </li>
  );
}

export default NavItem;