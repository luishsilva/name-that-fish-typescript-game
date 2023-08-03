import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import  { CounterType }  from "../../types"

export class ClassApp extends Component {
  state: CounterType = {
    incorrectCount: 0,
    correctCount: 0,
  };

  handleIncorrectCountCount = () => {
    this.setState({
      incorrectCount: this.state.incorrectCount + 1
    });
  }

  render() {
    const { incorrectCount, correctCount } = this.state
    return (
      <>
        <>
          <ClassScoreBoard 
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
          <ClassGameBoard 
            handleIncorrectCountCount={this.handleIncorrectCountCount}
          />
        </>
        {false && <ClassFinalScore />}
      </>
    );
  }
}
