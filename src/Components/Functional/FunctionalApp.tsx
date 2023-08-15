import { useState } from 'react';

import { FunctionalGameBoard } from './FunctionalGameBoard';
import { FunctionalScoreBoard } from './FunctionalScoreBoard';
import { FunctionalFinalScore } from './FunctionalFinalScore';

import { initialFishes } from './fishesNames';

type NameFishesType = {
  name: string;
  url: string;
}[];

export function FunctionalApp() {

  const [incorrectCount, setIncorrectCount] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [nameFishes, setNameFishes] = useState<NameFishesType>([...initialFishes]);
  return (
    <>
    {nameFishes.length > 0 && (
      <>
        <FunctionalScoreBoard 
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          nameFishes={nameFishes}
        />
        <FunctionalGameBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          nameFishes={nameFishes}
          setIncorrectCount={setIncorrectCount}
          setCorrectCount={setCorrectCount}
        />
      </>
    )}
    {nameFishes.length === 0 && 
      <FunctionalFinalScore 
        total={initialFishes.length}
        correctCount={correctCount}
      />
    }
    </>
  );
}
