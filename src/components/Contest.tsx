import Button from "./Button";
import "./Contest.scss";
import Result from "./Result";

function Contest() {
  return (
    <div className="contest-container">
      <div className="contest__choice player-choice">
        <h2 className="contest-text">YOU PICKED</h2>
        <Button avatar="scissors" picked />
      </div>
      <div className="result-container">
        <Result />
      </div>
      <div className="contest__choice ai-choice">
        <h2 className="contest-text">THE HOUSE PICKED</h2>
        <Button avatar="scissors" picked />
      </div>
    </div>
  );
}

export default Contest;
