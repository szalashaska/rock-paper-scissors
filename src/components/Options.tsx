import { useEffect, useRef, useContext, useCallback } from "react";
import { Avatars } from "../helpers/utils";
import Button from "./Button";
import GameContext from "../contexts/GameContext";

import "./Options.scss";

const ANIMATION_TIME = 1100;

function Options() {
  const { playerChoice } = useContext(GameContext);
  const optionsRef = useRef<HTMLDivElement>(null);

  const hideOptionsContainer: (element: HTMLDivElement) => void = useCallback(
    (element) => {
      // eslint-disable-next-line
      console.log("hide 1");
      element.classList.add("shrink");
      setTimeout(() => {
        // eslint-disable-next-line
        console.log("hide 2");
        element.classList.add("hide");
      }, ANIMATION_TIME);
    },
    [],
  );

  const showOptionsContainer: (element: HTMLDivElement) => void = useCallback(
    (element) => {
      // eslint-disable-next-line
      console.log("show 1");
      element.classList.remove("hide");
      // Wait for contest element to hide
      setTimeout(() => {
        // eslint-disable-next-line
        console.log("show 2");
        element.classList.remove("shrink");
      }, ANIMATION_TIME);
    },
    [],
  );

  useEffect(() => {
    if (!optionsRef.current) return;

    // Hide element after player's choice
    if (playerChoice) {
      // eslint-disable-next-line
      console.log("hide");
      hideOptionsContainer(optionsRef.current);

      // Show element after player clicked play again
    } else {
      // eslint-disable-next-line
      console.log("show");

      showOptionsContainer(optionsRef.current);
    }
  }, [playerChoice, hideOptionsContainer, showOptionsContainer]);

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
