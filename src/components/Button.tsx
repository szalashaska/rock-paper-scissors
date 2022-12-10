import "./Button.scss";
import Scissors from "../assets/icon-scissors.svg";

type Props = {
  avatar: string;
};

function Button({ avatar }: Props) {
  return (
    <button type="button" className={`game-button ${avatar}`}>
      <div className="game-button__wrapper">
        <img src={Scissors} alt={`Avatar of ${avatar}.`} />
      </div>
    </button>
  );
}

export default Button;
