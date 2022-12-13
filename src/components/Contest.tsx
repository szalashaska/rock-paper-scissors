import { useContext, useRef, useEffect, useCallback } from "react";
import GameContext from "../contexts/GameContext";
import Button from "./Button";
import "./Contest.scss";
import Result from "./Result";

const ANIMATION_TIME = 1000;

function Contest() {
  const constestRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const AIRef = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const { playerChoice, AIchoice } = useContext(GameContext);

  const showContestContainer: (element: HTMLDivElement) => Promise<void> = (
    element,
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.remove("hide");
        resolve();
      }, ANIMATION_TIME);
    });
  };

  const showPlayerChoice: (element: HTMLDivElement) => Promise<void> = (
    element,
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.remove("hide");
        resolve();
      }, ANIMATION_TIME);
    });
  };

  const showAIChoice: (element: HTMLDivElement) => Promise<void> = (
    element,
  ) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.remove("hide");
        resolve();
      }, ANIMATION_TIME);
    });
  };

  const showResult: (element: HTMLDivElement) => Promise<void> = (element) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        element.classList.remove("hide");
        resolve();
      }, ANIMATION_TIME);
    });
  };

  const handleShowAnimation: (
    elem1: HTMLDivElement,
    elem2: HTMLDivElement,
    elem3: HTMLDivElement,
    elem4: HTMLDivElement,
  ) => void = useCallback(async (elem1, elem2, elem3, elem4) => {
    await showContestContainer(elem1);
    await showPlayerChoice(elem2);
    await showAIChoice(elem3);
    await showResult(elem4);
  }, []);

  const hideContainer: (element: HTMLDivElement) => void = useCallback(
    (element) => {
      element.classList.add("hide");
      // setTimeout(() => {
      // }, ANIMATION_TIME);
    },
    [],
  );

  useEffect(() => {
    if (
      !constestRef.current ||
      !playerRef.current ||
      !AIRef.current ||
      !resultRef.current
    )
      return;

    // Wait for options to hide and show contest container
    if (playerChoice) {
      handleShowAnimation(
        constestRef.current,
        playerRef.current,
        AIRef.current,
        resultRef.current,
      );
      // Hide contest container
    } else {
      hideContainer(constestRef.current);
      hideContainer(playerRef.current);
      hideContainer(AIRef.current);
      hideContainer(resultRef.current);
    }
  }, [playerChoice, handleShowAnimation, hideContainer]);

  return (
    <div className="contest-container hide" ref={constestRef}>
      <div className="contest__choice player-choice hide" ref={playerRef}>
        <h2 className="contest-text">YOU PICKED</h2>
        <Button avatar={playerChoice} picked />
      </div>
      <div className="result-container hide" ref={resultRef}>
        <Result />
      </div>
      <div className="contest__choice ai-choice hide" ref={AIRef}>
        <h2 className="contest-text">THE HOUSE PICKED</h2>
        <Button avatar={AIchoice} picked />
      </div>
    </div>
  );
}

export default Contest;
