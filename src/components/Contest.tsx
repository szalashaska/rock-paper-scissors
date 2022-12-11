import Button from "./Button";
import "./Contest.scss";

function Contest() {
  return (
    <div className="contest-container">
      <div className="contest__choice player-choice">
        <p className="contest-text">YOU PICKED</p>
        <Button avatar="scissors" picked />
      </div>
      <div className="result" />
      <div className="contest__choice ai-choice">
        <p className="contest-text">THE HOUSE PICKED</p>
        <Button avatar="scissors" picked />
      </div>
    </div>
  );
}

export default Contest;
