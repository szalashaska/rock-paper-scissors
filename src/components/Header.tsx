import "./Header.scss";
import Score from "./Score";

function Header() {
  return (
    <header className="header-container">
      <div className="game-name">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        <span>LIZARD</span>
        <span>SPOCK</span>
      </div>
      <Score />
    </header>
  );
}

export default Header;
