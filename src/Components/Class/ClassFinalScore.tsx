import { Component } from 'react';
import { initialFishes } from './fishesNames';

type CorrectCountType = {
  correctCount: number;
};
export class ClassFinalScore extends Component<CorrectCountType> {
  render() {
    return (
      <div id="final-score">
        <h1>Your Final Score Was</h1>
        <div id="score">
          <p>{this.props.correctCount}</p>
          <hr />
          <p>{initialFishes.length}</p>
        </div>
      </div>
    );
  }
}
