import { useEffect, useRef, useContext } from "react";
import { Avatars } from "../helpers/utils";
import Button from "./Button";
import GameContext from "../contexts/GameContext";

import "./Options.scss";

function Options() {
  const { playerChoice } = useContext(GameContext);
  const optionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!optionsRef.current) return;

    if (playerChoice) {
      optionsRef.current.classList.toggle("hide");
    } else {
      setTimeout(() => {
        if (!optionsRef.current) return;
        optionsRef.current.classList.toggle("hide");
      }, 1100);
    }
  }, [playerChoice]);

  return (
    <div className="options-container" ref={optionsRef}>
      <Button avatar={Avatars.ROCK} />
      <Button avatar={Avatars.PAPER} />
      <Button avatar={Avatars.SCISSORS} />
      <Button avatar={Avatars.LIZARD} />
      <Button avatar={Avatars.SPOCK} />
    </div>
  );
}

export default Options;
