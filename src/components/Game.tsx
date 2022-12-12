import Contest from "./Contest";
import Options from "./Options";
import "./Game.scss";

function Game() {
  return (
    <main className="game-container">
      <Options />
      <Contest />
    </main>
  );
}

export default Game;
