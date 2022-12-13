import { useContext, useRef, useEffect, useCallback } from "react";
import GameContext from "../contexts/GameContext";
import {
  hideOptionsDuration,
  hideContestDuration,
  showResultsDuration,
  showChoicesDuration,
  showChoicesDelay,
} from "../helpers/AnimationTime";
import { Avatars, Results } from "../helpers/utils";
import Button from "./Button";
import "./Contest.scss";
import Result from "./Result";

function Contest() {
  const constestRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const AIRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const { playerChoice, AIchoice, result } = useContext(GameContext);

  const showElement: (
    element: HTMLDivElement,
    animationDuration: number,
    className: string,
  ) => Promise<void> = (element, animationDuration, className) => {
    return new Promise((resolve) => {
      element.classList.remove(className);
      setTimeout(() => {
        resolve();
      }, animationDuration);
    });
  };

  const hideElement: (element: HTMLDivElement, className: string) => void = (
    element,
    className,
  ) => {
    element.classList.add(className);
  };

  const handleWinnerAnimation: (action: string) => void = useCallback(
    (action) => {
      if (result === Results.DRAW || result === Results.RESET) return;
      const winner = result === Results.WIN ? playerRef.current : AIRef.current;

      if (action === "add") {
        winner?.classList.add("winner");
      }

      if (action === "remove") {
        winner?.classList.remove("winner");
      }
    },
    [result],
  );

  const handleShowAnimation: () => void = useCallback(async () => {
    if (
      !constestRef.current ||
      !playerRef.current ||
      !AIRef.current ||
      !resultRef.current
    )
      return;
    await showElement(constestRef.current, hideOptionsDuration, "shrink");
    await showElement(constestRef.current, showChoicesDelay, "hide");
    await showElement(playerRef.current, showChoicesDuration, "hide");
    await showElement(AIRef.current, showChoicesDuration, "hide");

    handleWinnerAnimation("add");

    await showElement(resultRef.current, showResultsDuration, "shrink");
    await showElement(resultRef.current, showResultsDuration, "transparent");
  }, [handleWinnerAnimation]);

  const handleHideAnimation: () => void = useCallback(() => {
    if (
      !constestRef.current ||
      !playerRef.current ||
      !AIRef.current ||
      !resultRef.current
    )
      return;
    hideElement(playerRef.current, "hide");
    hideElement(AIRef.current, "hide");
    hideElement(resultRef.current, "shrink");
    hideElement(resultRef.current, "transparent");
    hideElement(constestRef.current, "shrink");
    handleWinnerAnimation("remove");
    // Hide element after animation
    setTimeout(() => {
      constestRef.current?.classList.add("hide");
    }, hideContestDuration);
  }, [handleWinnerAnimation]);

  useEffect(() => {
    // Wait for options to hide and show contest container
    if (playerChoice) {
      handleShowAnimation();
      // Hide contest container
    } else if (playerChoice === Avatars.RESET) {
      handleHideAnimation();
    }
  }, [playerChoice, handleShowAnimation, handleHideAnimation]);

  return (
    <div className="contest-container hide shrink" ref={constestRef}>
      <div className="contest__choice hide" ref={playerRef}>
        <h2 className="contest-text">YOU PICKED</h2>
        {playerChoice && <Button avatar={playerChoice} picked />}
      </div>
      <div className="result-container shrink transparent" ref={resultRef}>
        <Result />
      </div>
      <div className="contest__choice hide" ref={AIRef}>
        <h2 className="contest-text">THE HOUSE PICKED</h2>
        <Button avatar={AIchoice} picked />
      </div>
    </div>
  );
}

export default Contest;
