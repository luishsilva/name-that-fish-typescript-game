import './styles/score-board.css';
//  Where the score is presented

type ScoreBoardType = {
  incorrectCount: number;
  correctCount: number;
  nameFishes: {
    name: string;
    url: string;
  }[];
};

export function FunctionalScoreBoard(props: ScoreBoardType) {
  const {incorrectCount, correctCount, nameFishes} = props;
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {nameFishes.map((fish) => (
          <div key={fish.name} className="choice">
            {fish.name}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
}
