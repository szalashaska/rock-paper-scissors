import { useContext } from "react";
import GameContext from "../contexts/GameContext";
import "./Score.scss";

function Score() {
  const { score } = useContext(GameContext);
  return (
    <div className="score-container">
      <span className="score-text">SCORE</span>
      <span className="score-value">{score}</span>
    </div>
  );
}

export default Score;
