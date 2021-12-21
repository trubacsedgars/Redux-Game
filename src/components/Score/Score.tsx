import './Score.scss';
import { FC } from 'react';

type ScoreProps = {
  userScore: number
  computerScore: number
  drawScore: number
}

const Score:FC<ScoreProps> = ({ userScore, computerScore, drawScore }) => (
  <div className="game-container-score">
    <div className="game__score-wrapper">
      <div className="game__score">
        <div>
          Your score:
          <span className="game__offset">
            {userScore}
          </span>
        </div>
      </div>
    </div>
    <div className="game__score-wrapper">
      <div className="game__score">
        <div>
          Tie score:
          <span className="game__offset">
            {drawScore}
          </span>
        </div>
      </div>
    </div>
    <div className="game__score-wrapper">
      <div className="game__score">
        <div>
          Computer score:
          <span className="game__offset">
            {computerScore}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Score;
