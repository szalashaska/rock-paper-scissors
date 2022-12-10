import "./App.scss";
import Game from "./components/Game";
import Header from "./components/Header";

function App() {
  return (
    <div className="game-wrapper">
      <Header />
      <Game />
    </div>
  );
}

export default App;
