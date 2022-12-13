import { useEffect, useRef, useContext } from "react";
import { Avatars } from "../helpers/utils";
import Button from "./Button";
import GameContext from "../contexts/GameContext";

import "./Options.scss";
import {
  hideOptionsDuration,
  hideContestDuration,
} from "../helpers/AnimationTime";

function Options() {
  const { playerChoice } = useContext(GameContext);
  const optionsRef = useRef<HTMLDivElement>(null);

  const hideOptionsContainer: (element: HTMLDivElement) => void = (element) => {
    element.classList.add("shrink");
    setTimeout(() => {
      element.classList.add("hide");
    }, hideOptionsDuration);
  };

  const showOptionsContainer: (element: HTMLDivElement) => void = (element) => {
    element.classList.remove("hide");
    setTimeout(() => {
      // Wait for results to hide
      element.classList.remove("shrink");
    }, hideContestDuration);
  };

  useEffect(() => {
    if (!optionsRef.current) return;

    if (playerChoice) {
      // Hide element after player's choice
      hideOptionsContainer(optionsRef.current);
    } else if (playerChoice === Avatars.RESET) {
      // Show element after player clicked play again
      showOptionsContainer(optionsRef.current);
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
