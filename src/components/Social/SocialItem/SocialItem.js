import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SocialItem.css";

function SocialItem({
  icon,
  link,
}) {
  return (
    <li className="social__item">
      <a href={link} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="social__icon" icon={icon} />
      </a>
    </li>
  );
}

export default SocialItem;