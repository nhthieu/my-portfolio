import Percentage from "../Percentage";
import "./SkillsItem.css";

function SkillsItem({ title, percentage }) {
  return (
    <li className="skills__item">
      <div className="skills__item-details">
        <div className="skills__item-details-title">
          <span>{title}</span>
        </div>
        <Percentage value={percentage} />
      </div>
    </li>
  );
}

export default SkillsItem;