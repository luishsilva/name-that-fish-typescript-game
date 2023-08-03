import { Component } from "react";
import "./styles/score-board.css";

import  { CounterType }  from "../../types"

const answersLeft = ["trout", "salmon", "tuna", "shark"];
export class ClassScoreBoard extends Component<CounterType> {
  render() {
    const {incorrectCount, correctCount} = this.props;
    return (
      <div id="score-board">
        <div>Incorrect 🔻: {incorrectCount}</div>
        <div id="choices-left">
          {answersLeft.map((answer) => (
            <div key={answer} className="choice">
              {answer}
            </div>
          ))}
        </div>
        <div>Correct ✅: {correctCount}</div>
      </div>
    );
  }
}
