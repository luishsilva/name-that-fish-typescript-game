import { Component } from 'react';
import './styles/score-board.css';
import { ScoreBoardType } from '../../types';

export class ClassScoreBoard extends Component<ScoreBoardType> {
    render() {
        const { incorrectCount, correctCount, nameFishes } = this.props;
        return (
            <div id="score-board">
                <div>Incorrect 🔻: {incorrectCount}</div>
                <div id="choices-left">
                    {nameFishes.map((answer) => (
                        <div key={answer.name} className="choice">
                            {answer.name}
                        </div>
                    ))}
                </div>
                <div>Correct ✅: {correctCount}</div>
            </div>
        );
    }
}
