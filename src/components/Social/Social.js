// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import SocialItem from "./SocialItem";
import "./Social.css";

function Social() {
  return (
    <div className="social__block">
      <ul className="social__list">
        <SocialItem
          icon={faFacebook}
          link="https://www.facebook.com/hieu0106/"
        />
        <SocialItem
          icon={faLinkedin}
          link="https://www.linkedin.com/in/nhthieu16/"
        />
        <SocialItem
          icon={faInstagram}
          link="https://www.instagram.com/nht.hieu/"
        />
      </ul>
    </div>

  );
}

export default Social;