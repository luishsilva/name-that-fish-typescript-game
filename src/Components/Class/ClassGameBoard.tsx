import { Component } from 'react';
import './styles/game-board.css';

type GuessNameType = {
  guessName: string;
};

type GameBoardType = {
  handleAnswer: (name: string) => void
  fishData: {
    name: string;
    url: string;
  };
};

export class ClassGameBoard extends Component<GameBoardType> {
  state: GuessNameType = {
    guessName: '',
  };

  onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleAnswer(this.state.guessName);
    this.setState({
      guessName: ''
    });
  };

  render() {
    const { fishData } = this.props;
    const { guessName } = this.state;
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={fishData.url} alt={fishData.name} />
        </div>
        <form onSubmit={this.onHandleSubmit} id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input
            type="text"
            id="fish-guess"
            name="fish-guess"
            value={guessName ? guessName : ''}
            onChange={(e) => this.setState({guessName: e.target.value.toLocaleLowerCase().trim() })}
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
