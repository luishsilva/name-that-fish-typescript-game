import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { initialFishes } from './fishesNames';

type ClassAppType = {
  incorrectCount: number;
  correctCount: number;
  fishIndex: number;
}

export class ClassApp extends Component {
  state: ClassAppType = {
    incorrectCount: 0,
    correctCount: 0,
    fishIndex: 0,
  };

  handleIncorrectCount = () => {
    this.setState({
      incorrectCount: this.state.incorrectCount + 1,
    });
  };

  handleCorrectCount = () => {
    this.setState({
      correctCount: this.state.correctCount + 1,
    });
  };

  handleAnswer = (answer: string) => {
    const {fishIndex} = this.state
    initialFishes[fishIndex].name === answer 
      ? this.handleCorrectCount() 
      : this.handleIncorrectCount();
      
      this.setState({
        fishIndex: fishIndex + 1
      })
  }

  render() {
    const { correctCount, incorrectCount, fishIndex } = this.state;
    const answersLeft = initialFishes.map((fish) => fish.name);
    const isGameOver = fishIndex === initialFishes.length;
    return (
      <>
        {!isGameOver && (
          <>
            <ClassScoreBoard
              incorrectCount={incorrectCount}
              correctCount={correctCount}
              answersLeft={answersLeft.slice(fishIndex)}
            />
            <ClassGameBoard
              fishData={initialFishes[fishIndex]}
              handleAnswer={this.handleAnswer}
            />
          </>
        )}
        {isGameOver && (
          <ClassFinalScore correctCount={correctCount} />
        )}
      </>
    );
  }
}
