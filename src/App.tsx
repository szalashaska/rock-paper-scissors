import "./App.scss";
import Game from "./components/Game";
import Header from "./components/Header";
import Rules from "./components/Rules";

function App() {
  return (
    <div className="game-wrapper">
      <Header />
      <Game />
      <Rules />
    </div>
  );
}

export default App;
