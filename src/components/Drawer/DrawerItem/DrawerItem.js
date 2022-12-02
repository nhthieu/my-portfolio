import { Link } from "react-scroll";
import "./DrawerItem.css";

function DrawerItem({
  title,
  to,
  offset
}) {
  return (
    <li className="drawer__item">
      <Link
        className="drawer__link"
        // activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        {title}
      </Link>
    </li>
  );
}

export default DrawerItem;