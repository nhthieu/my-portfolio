import classNames from "classnames";
// import { motion } from "framer-motion";
import DrawerItem from "./DrawerItem";
import "./Drawer.css";

function Drawer({
  open = false
}) {
  const drawerClass = classNames({
    "drawer": true,
    "drawer-open": open,
  })
  // const drawerContentClass = classNames({
  //   "drawer__content": true,
  //   "drawer__content-open": open,
  // })

  return (
    <div className={drawerClass}>
      <div className="drawer__content">
        <ul className="drawer__list">
          <DrawerItem
            title="home"
            to="home"
            offset={0}
            open={open}
          />
          <DrawerItem
            title="about"
            to="about"
            offset={0}
            open={open}
          />
          <DrawerItem
            title="skills"
            to="skills"
            offset={-70}
            open={open}
          />
          <DrawerItem
            title="education"
            to="education"
            offset={-70}
            open={open}
          />
          <DrawerItem
            title="projects"
            to="projects"
            offset={-70}
            open={open}
          />
          <DrawerItem
            title="contact"
            to="contact"
            offset={-70}
            open={open}
          />
        </ul>
      </div>
    </div>
  );
}

export default Drawer;