import "./App.scss";
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
      </GameProvider>
    </div>
  );
}

export default App;
