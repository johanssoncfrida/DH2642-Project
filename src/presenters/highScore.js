import HighScoreView from "../views/highScoreView";

const HighScore = () => {
  let highscores = [
    {
      score: 5,
      time: "3m 15s",
    },
    {
      score: 5,
      time: "10m 12s",
    },
    {
      score: 3,
      time: "4m 6s",
    },
    {
      score: 2,
      time: "6m 33s",
    },
    {
      score: 1,
      time: "7m 42s",
    },
  ];
  return HighScoreView({ highscores });
};

export default HighScore;
