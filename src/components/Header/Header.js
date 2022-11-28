// import ReactSwitch from 'react-switch';
import { Link } from "react-scroll";
import Signature from "../Signature";
import Navbar from "../Navbar/Navbar";
import "./Header.css"

function Header() {
  return (
    <div className="header">
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