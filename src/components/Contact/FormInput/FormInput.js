import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FormInput.css";

function FormInput({
  icon,
  type,
  name,
  value,
  placeholder,
  handleChange
}) {
  const Component = name === "message" ? "textarea" : "input";

  return (
    <div className="form-input">
      <div className="form-input__icon-wrapper">
        <FontAwesomeIcon className="form-input__icon" icon={icon} />
      </div>
      <Component
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default FormInput;