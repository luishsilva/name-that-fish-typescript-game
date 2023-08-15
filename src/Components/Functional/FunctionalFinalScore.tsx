import './styles/final-score.css';

type FinalScoreType = {
  total: number;
  correctCount: number;
}
export const FunctionalFinalScore = (props: FinalScoreType) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{props.correctCount}</p>
      <hr />
      <p>{props.total}</p>
    </div>
  </div>
);
