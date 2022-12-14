import "./App.scss";
import Attribution from "./components/Attribution";
import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";
import { GameProvider } from "./contexts/GameContext";

function App() {
  return (
    <div className="game-wrapper">
      <GameProvider>
        <Header />
        <Game />
        <Rules />
        <Attribution />
      </GameProvider>
    </div>
  );
}

export default App;
