import { Component } from "react";
import "./styles/game-board.css";
import { Images } from "../../assets/Images";
import  { FnType }  from "../../types"

const initialFishes = [
  {
    name: "trout",
    url: Images.trout,
  },
  {
    name: "salmon",
    url: Images.salmon,
  },
  {
    name: "tuna",
    url: Images.tuna,
  },
  {
    name: "shark",
    url: Images.shark,
  },
];

export class ClassGameBoard extends Component<FnType> {


  handleFishGuessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(
      {
        fishName: e.target.value,
        initialFishesNames: initialFishes,
      }
    );
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.handleIncorrectCountCount();
  }


  render() {
    //const { fishName } = this.state;
    
    const nextFishToName = initialFishes[0];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img src={nextFishToName.url} alt={nextFishToName.name} />
        </div>
        <form onSubmit={this.handleSubmit} 
          id="fish-guess-form">
          <label htmlFor="fish-guess">What kind of fish is this?</label>
          <input 
            type="text" 
            name="fish-guess" 
            onChange={this.handleFishGuessChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
