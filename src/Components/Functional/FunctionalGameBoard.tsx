import React, { useState } from 'react';
import { initialFishes } from './fishesNames';
import './styles/game-board.css';

type GameBoardType = {
  incorrectCount: number;
  correctCount: number;
  setIncorrectCount: React.Dispatch<React.SetStateAction<number>>;
  setCorrectCount: React.Dispatch<React.SetStateAction<number>>;
  nameFishes: {
    name: string;
    url: string;
  }[];
};

export function FunctionalGameBoard(props: GameBoardType) {
  const nextFishToName = props.nameFishes[0] ? props.nameFishes[0] : initialFishes[initialFishes.length-1];

  const [guessName, setGuessName] = useState('');
  
  const handleFishGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGuessName(e.target.value.toLocaleLowerCase().trim());
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (guessName !== props.nameFishes[0].name) {
      props.setIncorrectCount(props.incorrectCount + 1);
    } else {
      props.setCorrectCount(props.correctCount + 1);
    }
    props.nameFishes.shift();
    setGuessName('');
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={nextFishToName.url} alt={nextFishToName.name} />
      </div>
      <form onSubmit={onHandleSubmit} id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess" 
          onChange={handleFishGuessChange}
          value={guessName ? guessName : ''}
          ref={(inp) => {
            inp?.focus();
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
