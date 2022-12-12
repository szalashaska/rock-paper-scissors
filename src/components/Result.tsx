import { useContext } from "react";
import GameContext from "../contexts/GameContext";
import { Avatars } from "../helpers/utils";
import "./Result.scss";

function Result() {
  const { result, setPlayerChoice } = useContext(GameContext);

  const handlePlayAgain = () => {
    setPlayerChoice(Avatars.RESET);
  };

  return (
    <>
      <h2 className="result-text">{result}</h2>
      <button
        className="result-button"
        type="button"
        onClick={() => handlePlayAgain()}
      >
        PLAY AGAIN
      </button>
    </>
  );
}

export default Result;
