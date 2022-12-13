import {
  createContext,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  avatarList,
  Avatars,
  beatsList,
  BeatsListType,
  Results,
} from "../helpers/utils";

type GameType = {
  playerChoice: Avatars;
  AIchoice: Avatars;
  result: Results;
  score: number;
  setPlayerChoice: (choice: Avatars) => void;
};

type Props = {
  children: ReactElement | ReactElement[];
};

const GameContext = createContext<GameType>({
  playerChoice: Avatars.RESET,
  AIchoice: Avatars.RESET,
  result: Results.RESET,
  score: 0,
  setPlayerChoice: () => {},
});

export default GameContext;

export function GameProvider({ children }: Props) {
  const [playerChoice, setPlayerChoice] = useState<Avatars>(Avatars.RESET);
  const [AIchoice, setAIchoice] = useState<Avatars>(Avatars.RESET);
  const [result, setResult] = useState<Results>(Results.RESET);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    if (playerChoice) {
      const choiceIndex = Math.floor(Math.random() * 5);
      setAIchoice(avatarList[choiceIndex]);
    } else setAIchoice(Avatars.RESET);
  }, [playerChoice]);

  useEffect(() => {
    if (!AIchoice || !playerChoice) return;

    if (AIchoice === playerChoice) {
      setResult(Results.DRAW);
    } else if (
      beatsList[playerChoice as keyof BeatsListType].includes(AIchoice)
    ) {
      setResult(Results.WIN);
      setScore((prev) => prev + 1);
    } else {
      setResult(Results.LOSE);
      setScore((prev) => prev - 1);
    }
  }, [AIchoice, playerChoice]);

  const data = useMemo(
    () => ({
      playerChoice,
      AIchoice,
      result,
      score,
      setPlayerChoice,
    }),
    [playerChoice, AIchoice, result, score, setPlayerChoice],
  );

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
}
