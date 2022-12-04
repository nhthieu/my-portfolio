import "./Percentage.css";

function Percentage({ value }) {
  return (
    <div className="percentage">
      <div className="percentage__background">
        <div className="percentage__foreground" style={{ width: `${value}%` }}>
          <div className="percentage__value-tag">
            <span className="percentage__value">{value} %</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Percentage;