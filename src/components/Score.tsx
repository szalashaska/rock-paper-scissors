import { useCallback, useContext, useEffect, useRef, useState } from "react";
import GameContext from "../contexts/GameContext";
import {
  updateScoreDelay,
  updateScoreDuration,
} from "../helpers/AnimationTime";
import useFirstRender from "../hooks/useFirstRender";
import "./Score.scss";

function Score() {
  const [currentScore, setCurrentScore] = useState<number>(0);
  const scoreRef = useRef<HTMLSpanElement>(null);
  const { score } = useContext(GameContext);

  const firstRender = useFirstRender();

  const waitForResults: () => Promise<void> = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, updateScoreDelay);
    });
  };

  const animateScore: () => void = () => {
    scoreRef.current?.classList.add("update");
    setTimeout(() => {
      scoreRef.current?.classList.remove("update");
    }, updateScoreDuration);
  };

  const updateScoreValue: () => void = useCallback(() => {
    setTimeout(() => {
      setCurrentScore(score);
    }, updateScoreDuration / 2);
  }, [score]);

  const handleUpdateScore = useCallback(async () => {
    await waitForResults();
    animateScore();
    updateScoreValue();
  }, [updateScoreValue]);

  useEffect(() => {
    if (firstRender) return;

    handleUpdateScore();
  }, [score, handleUpdateScore, firstRender]);

  return (
    <div className="score-container">
      <span className="score-text">SCORE</span>
      <span className="score-value" ref={scoreRef}>
        {currentScore}
      </span>
    </div>
  );
}

export default Score;
