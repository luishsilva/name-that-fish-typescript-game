import { Component } from 'react';
import { ClassScoreBoard } from './ClassScoreBoard';
import { ClassGameBoard } from './ClassGameBoard';
import { ClassFinalScore } from './ClassFinalScore';
import { ScoreBoardType } from '../../types';
import { initialFishes } from './fishesNames';

export class ClassApp extends Component {
    state: ScoreBoardType = {
        incorrectCount: 0,
        correctCount: 0,
        nameFishes: [...initialFishes],
    };

    handleIncorrectCount = () => {
        this.setState({
            incorrectCount: this.state.incorrectCount + 1,
        });
        this.state.nameFishes.shift();
    };

    handleCorrectCount = () => {
        this.setState({
            correctCount: this.state.correctCount + 1,
        });
        this.state.nameFishes.shift();
    };

    render() {
        const { incorrectCount, correctCount, nameFishes } = this.state;
        return (
            <>
                {nameFishes.length > 0 && (
                    <>
                        <ClassScoreBoard
                            incorrectCount={incorrectCount}
                            correctCount={correctCount}
                            nameFishes={nameFishes}
                        />
                        <ClassGameBoard
                            handleIncorrectCount={this.handleIncorrectCount}
                            handleCorrectCount={this.handleCorrectCount}
                            nameFishes={nameFishes}
                        />
                    </>
                )}
                {nameFishes.length === 0 && (
                    <ClassFinalScore correctCount={correctCount} />
                )}
            </>
        );
    }
}
