import React, { useState } from 'react';
import './styles/game-board.css';

type GameBoardType = {
  handleAnswer: (name: string) => void
  fishData: {
    name: string;
    url: string;
  };
};

export function FunctionalGameBoard(props: GameBoardType) {
  const { handleAnswer, fishData } = props;
  const [guessName, setGuessName] = useState('');
  
  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAnswer(guessName);
    setGuessName('');
  }

  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishData.url} alt={fishData.name} />
      </div>
      <form onSubmit={onHandleSubmit} id="fish-guess-form">
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input 
          type="text" 
          name="fish-guess" 
          onChange={(e) => setGuessName(e.target.value)}
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
