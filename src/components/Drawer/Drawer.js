import classNames from "classnames";
import { motion } from "framer-motion";
import DrawerItem from "./DrawerItem";
import "./Drawer.css";

function Drawer({
  open = false
}) {
  const drawerClass = classNames({
    "drawer": true,
    "drawer-open": open,
  })

  return (
    <motion.div
      className={drawerClass}
    >
      <div className="drawer__content">
        <ul className="drawer__list">
          <DrawerItem
            title="home"
            to="home"
            offset={-70}
          />
          <DrawerItem
            title="about"
            to="about"
            offset={-70}
          />
          <DrawerItem
            title="skills"
            to="skills"
            offset={-70}
          />
          <DrawerItem
            title="education"
            to="education"
            offset={-70}
          />
          <DrawerItem
            title="projects"
            to="projects"
            offset={-70}
          />
          <DrawerItem
            title="contact"
            to="contact"
            offset={-70}
          />
        </ul>
      </div>
    </motion.div>
  );
}

export default Drawer;