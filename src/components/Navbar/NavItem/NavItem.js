import { Link } from "react-scroll";
import "./NavItem.css";

function NavItem({
  type,
  icon,
  title,
  to,
  offset,
  changeTheme,
}) {
  return (
    <li className="nav-item" >
      {
        type === "link"
          ?
          <Link
            className="nav-item__link"
            activeClass="active"
            to={to} spy={true}
            smooth={true}
            offset={offset}
            duration={500}
          >
            <div className="nav-item__icon">{icon}</div>
            <div className="nav-item__title">{title}</div>
          </Link>

          :
          <div className="nav-item__theme-switch" onClick={changeTheme}>{icon}</div>
      }
    </li>
  );
}

export default NavItem;