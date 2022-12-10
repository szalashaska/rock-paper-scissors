import { useState } from "react";
import "./Rules.scss";
import GameRules from "../assets/image-rules-bonus.svg";
import Close from "../assets/icon-close.svg";

function Rules() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      {isActive && (
        <div className="rules-display">
          <div className="rules-display__container">
            <button
              type="button"
              className="rules-display_close-button"
              onClick={() => setIsActive(false)}
            >
              <img src={Close} alt="Rules close button." />
            </button>
            <img
              src={GameRules}
              alt="Rules of the game."
              className="rules-display__image"
            />
          </div>
        </div>
      )}
      <button
        type="button"
        className="rules-button"
        onClick={() => setIsActive(true)}
      >
        RULES
      </button>
    </>
  );
}

export default Rules;
