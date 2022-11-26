import Typewriter from "typewriter-effect";
import "./Typer.css";

function Typer({
  prefix = "",
  texts = []
}) {
  return (
    <div className="typewriter-wrapper">
      <h1 className="typewriter__prefix">
        {prefix}
        <span> {/* Typewriter has className = "Typewriter" */}
          <Typewriter
            options={{
              strings: [...texts],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h1>
    </div>
  );
}

export default Typer;