import { Component } from 'react';
import './styles/score-board.css';

export type ScoreBoardType = {
  incorrectCount: number;
  correctCount: number;
  answersLeft: string[];
};

export class ClassScoreBoard extends Component<ScoreBoardType> {
  render() {
    const { incorrectCount, correctCount, answersLeft } = this.props;
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
}
