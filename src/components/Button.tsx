import { useContext } from "react";
import "./Button.scss";
import Rock from "../assets/icon-rock.svg";
import Paper from "../assets/icon-paper.svg";
import Scissors from "../assets/icon-scissors.svg";
import Lizard from "../assets/icon-lizard.svg";
import Spock from "../assets/icon-spock.svg";
import { avatarList, Avatars } from "../helpers/utils";
import GameContext from "../contexts/GameContext";

type Props = {
  avatar: Avatars;
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

function Button({ avatar, picked }: Props) {
  const { setPlayerChoice } = useContext(GameContext);

  if (!avatarList.includes(avatar)) return null;

  const handlePlayerPick = () => {
    if (picked) return;
    setPlayerChoice(avatar);
  };

  return (
    <button
      onClick={() => handlePlayerPick()}
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
