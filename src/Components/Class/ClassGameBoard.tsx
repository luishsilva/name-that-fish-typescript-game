import { Component } from 'react';
import './styles/game-board.css';
import { initialFishes } from './fishesNames';

type FishGuessType = {
  fishGuess: string;
};

export type GameBoardType = {
  handleIncorrectCount: () => void;
  handleCorrectCount: () => void;
  nameFishes: Array<{ name: string; url: string }>;
};

export class ClassGameBoard extends Component<GameBoardType> {
  state: FishGuessType = {
    fishGuess: '',
  };

  handleFishGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      fishGuess: e.target.value.toLocaleLowerCase().trim(),
    });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nameFishes } = this.props;

    const { fishGuess } = this.state;

    if (fishGuess) {
      if (fishGuess !== nameFishes[0].name) {
        this.props.handleIncorrectCount();
      } else {
        this.props.handleCorrectCount();
      }
    }

    this.setState({ fishGuess: '' });
  };

  render() {
    const { nameFishes } = this.props;
    const nextFishToName = nameFishes[0] ? nameFishes[0] : initialFishes[3];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form onSubmit={this.handleSubmit} id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            id="fish-guess"
            name="fish-guess"
            value={this.state ? this.state.fishGuess : ''}
            onChange={this.handleFishGuessChange}
            ref={(inp) => {
              inp?.focus();
            }}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
