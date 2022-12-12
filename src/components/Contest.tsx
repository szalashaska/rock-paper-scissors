import { useContext, useRef, useEffect } from "react";
import GameContext from "../contexts/GameContext";
import Button from "./Button";
import "./Contest.scss";
import Result from "./Result";

function Contest() {
  const constestRef = useRef<HTMLDivElement>(null);
  const { playerChoice, AIchoice } = useContext(GameContext);

  useEffect(() => {
    if (!constestRef.current) return;

    if (playerChoice) {
      setTimeout(() => {
        if (!constestRef.current) return;
        constestRef.current.classList.toggle("hide");
      }, 1100);
    } else {
      constestRef.current.classList.toggle("hide");
    }
  }, [playerChoice]);

  return (
    <div className="contest-container hide" ref={constestRef}>
      <div className="contest__choice player-choice">
        <h2 className="contest-text">YOU PICKED</h2>
        <Button avatar={playerChoice} picked />
      </div>
      <div className="result-container">
        <Result />
      </div>
      <div className="contest__choice ai-choice">
        <h2 className="contest-text">THE HOUSE PICKED</h2>
        <Button avatar={AIchoice} picked />
      </div>
    </div>
  );
}

export default Contest;
