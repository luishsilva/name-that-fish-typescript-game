import { useState } from 'react';

import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';

import { initialFishes } from './fishesNames';


export function FunctionalApp() {

  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const fishIndex = correctCount + incorrectCount;
  const isGameOver = fishIndex === initialFishes.length;

  const answersLeft = initialFishes.map((fish) => fish.name)

  const handleAnswer = (answer: string) => {
    initialFishes[fishIndex].name === answer 
      ? setCorrectCount(correctCount + 1) 
      : setIncorrectCount(incorrectCount + 1);
  }

  return (
    <>
    {!isGameOver && (
      <>
        <FunctionalScoreBoard 
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          answersLeft={answersLeft.slice(fishIndex)}
        />
        <FunctionalGameBoard
          fishData={initialFishes[fishIndex]}
          handleAnswer={handleAnswer}
        />
      </>
    )}
    {isGameOver && 
      <FunctionalFinalScore 
        total={initialFishes.length}
        correctCount={correctCount}
      />
    }
    </>
  );
}
