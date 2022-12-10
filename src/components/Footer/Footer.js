import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Signature from "../Signature";
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content-left">
          <div className="footer__trademark">
            <div className="footer__trademark-signature">
              <Signature footerSignature />
            </div>
            <div className="footer__madewith">
              <p>made with <FontAwesomeIcon icon={faHeart} /> by</p>
              <p>Hieu Nguyen</p>
            </div>
          </div>

          <div className="footer__artwork-source">
            <p>artwork by </p>
            <a href="https://rajawats.com/" target="blank" rel="noreferrer">SURENDRA RAJAWAT</a>
          </div>
        </div>
        <div className="footer__content-right">
          <div className="footer__copyright">
            <span>© HIEUNGUYEN All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;