export enum Avatars {
  PAPER = "paper",
  ROCK = "rock",
  SCISSORS = "scissors",
  LIZARD = "lizard",
  SPOCK = "spock",
  RESET = "",
}

export enum Results {
  WIN = "YOU WIN",
  DRAW = "DRAW",
  LOSE = "YOU LOSE",
  RESET = "",
}

export const avatarList: Avatars[] = [
  Avatars.PAPER,
  Avatars.ROCK,
  Avatars.SCISSORS,
  Avatars.LIZARD,
  Avatars.SPOCK,
];

export type BeatsListType = {
  spock: Avatars[];
  scissors: Avatars[];
  paper: Avatars[];
  rock: Avatars[];
  lizard: Avatars[];
};

export const beatsList: BeatsListType = {
  [Avatars.SPOCK]: [Avatars.SCISSORS, Avatars.ROCK],
  [Avatars.SCISSORS]: [Avatars.PAPER, Avatars.LIZARD],
  [Avatars.PAPER]: [Avatars.ROCK, Avatars.SPOCK],
  [Avatars.ROCK]: [Avatars.LIZARD, Avatars.SCISSORS],
  [Avatars.LIZARD]: [Avatars.SPOCK, Avatars.PAPER],
};
