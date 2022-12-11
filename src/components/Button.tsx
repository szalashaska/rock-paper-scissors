import "./Button.scss";
import Rock from "../assets/icon-rock.svg";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";

type Props = {
  avatar: string;
  picked?: boolean;
};

type AvatarImage = {
  rock: string;
  paper: string;
  scissors: string;
  lizard: string;
  spock: string;
};

const avatarImage: AvatarImage = {
  rock: Rock,
  paper: Paper,
  scissors: Scissors,
  lizard: Lizard,
  spock: Spock,
};

const accepted: string[] = ["rock", "paper", "scissors", "lizard", "spock"];

function Button({ avatar, picked }: Props) {
  if (!accepted.includes(avatar)) return null;

  const handlePlayerPick = () => {};

  return (
    <button
      onClick={handlePlayerPick}
      type="button"
      className={`game-button ${avatar} ${picked ? "picked" : ""}`}
    >
      <div className="game-button__wrapper">
        <img
          src={avatarImage[avatar as keyof AvatarImage]}
          alt={`Avatar of ${avatar}.`}
        />
      </div>
    </button>
  );
}

Button.defaultProps = {
  picked: false,
};

export default Button;
