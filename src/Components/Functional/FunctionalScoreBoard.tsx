import './styles/score-board.css';
//  Where the score is presented

type ScoreBoardType = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};

export function FunctionalScoreBoard(props: ScoreBoardType) {
  const {incorrectCount, correctCount, answersLeft} = props;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((fish) => (
          <div key={fish} className="choice">
            {fish}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
