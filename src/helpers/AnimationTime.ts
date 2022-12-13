// Make sure to match css variables in App.scss
export const hideOptionsDuration = 1000;
export const hideContestDuration = 800;
export const showChoicesDuration = 750;
export const showResultsDuration = 500;
export const showChoicesDelay = 100;
export const updateScoreDuration = 500;

export const updateScoreDelay =
  hideOptionsDuration +
  2 * showChoicesDuration +
  showResultsDuration +
  showChoicesDelay;
