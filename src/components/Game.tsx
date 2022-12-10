import Button from "./Button";
import "./Game.scss";

function Game() {
  return (
    <main className="game-container">
      <Button avatar="rock" />
      <Button avatar="scissors" />
      <Button avatar="paper" />
      <Button avatar="lizard" />
      <Button avatar="spock" />
    </main>
  );
}

export default Game;
