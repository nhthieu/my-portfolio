import { useContext } from "react";
import { Link } from "react-scroll";
import classNames from "classnames";
import { ScrollYContext } from "../../ScrollYContext";
import Signature from "../Signature";
import Navbar from "../Navbar/Navbar";
import "./Header.css"

function Header() {
  const offsetY = useContext(ScrollYContext).offsetY;
  const headerClass = classNames({
    "header": true,
    // "header__bg-color": offsetY >= 100
  })

  return (
    <div className={headerClass}>
      <div className="header__content">
        <div className="header__signature">
          <Link
            to={"home"}
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
          >
            <Signature headerSignature />
          </Link>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

export default Header;