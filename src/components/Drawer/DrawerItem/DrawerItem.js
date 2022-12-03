import { Link } from "react-scroll";
import classNames from "classnames";
import "./DrawerItem.css";

function DrawerItem({
  title,
  to,
  offset,
  open = false
}) {
  const drawerItemClass = classNames({
    "drawer__item": true,
    "drawer__item-open": open,
  })

  return (
    <li className={drawerItemClass} >
      <Link
        className="drawer__link"
        // activeClass="active"
        to={to}
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