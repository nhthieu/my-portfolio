import "./Typewriter.css";

function Typewriter({
  text
}) {
  return (
    <div className="typewriter">
      <h1>{text}</h1>
    </div>
  );
}

export default Typewriter;