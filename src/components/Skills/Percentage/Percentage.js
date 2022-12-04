import "./Percentage.css";

function Percentage({ value }) {
  return (
    <div className="percentage">
      <div className="percentage__background">
        <div className="percentage__foreground" style={{ width: `${value}%` }}></div>
        <span className="percentage__value">{value} %</span>
      </div>
    </div>
  );
}

export default Percentage;