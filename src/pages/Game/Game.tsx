import './Game.scss';
import { useEffect } from 'react';
import useSound from 'use-sound';
import Hero from '../../components/Hero/Hero';
import Score from '../../components/Score/Score';
import { userWinningSelections, selections } from '../../components/GameSelections/GameSelections';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addComputerSelection, addUserSelection, increaseUserScore, increaseComputerScore, increaseTieScore, resultOfTheGame,
} from '../../store/gameSlice';
import Sound from '../../components/Sound/Sound';
import themeSong from '../../assets/song/themeSong.mp3';
import CountDown from '../../components/CountDown/CountDown';

const Game = () => {
  const userSelection = useAppSelector((state) => state.game.userSelection);
  const computerSelection = useAppSelector((state) => state.game.computerSelection);
  const userTotalScore = useAppSelector((state) => state.game.userTotalScore);
  const computerTotalScore = useAppSelector((state) => state.game.computerTotalScore);
  const tieTotalScore = useAppSelector((state) => state.game.drawScore);
  const gameResult = useAppSelector((state) => state.game.resultOfGame);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!userSelection || !computerSelection) {
      return;
    }

    if (userSelection === computerSelection) {
      dispatch(resultOfTheGame('Dont\'\t give up, ITS A DRAW! 💣 '));
      dispatch(increaseTieScore());
      return;
    }

    if (userWinningSelections.includes(userSelection + computerSelection)) {
      dispatch(resultOfTheGame('Hooray, YOU WON! 🏆'));
      dispatch(increaseUserScore());
      return;
    }

    dispatch(resultOfTheGame('Oh No... YOU LOSE! 🎭'));
    dispatch(increaseComputerScore());
  }, [computerSelection, userSelection]);

  const randomSelectionGenerator = () => {
    const randomSelection = selections[Math.floor(Math.random() * selections.length)];
    dispatch(addComputerSelection(randomSelection));
  };

  const chooseSelection = (selection: string) => {
    dispatch(addUserSelection(selection));
    randomSelectionGenerator();
  };

  const [playSound] = useSound(themeSong);

  return (
    <>
      <Hero />
      <div className="game">
        <Score
          userScore={userTotalScore}
          computerScore={computerTotalScore}
          drawScore={tieTotalScore}
        />

        <div className="game-container-player">
          <div className="game__players-wrapper">
            <span className="game__player">You</span>
            <div className="game__player-icon">
              {userSelection}
            </div>
          </div>
          <div className="final_output">
            {gameResult}
          </div>
          <div className="game__players-wrapper">
            <span className="game__player">Computer</span>
            <div className="game__player-icon">
              {computerSelection}
            </div>
          </div>
        </div>

        <div className="game__choices-wrapper">
          {selections.map((selection) => (
            <div
              key={selection}
              className="blob-orange"
            >
              <button
                className="game__choices"
                key={selection}
                onClick={() => chooseSelection(selection)}
              >
                {selection}
              </button>
            </div>
          ))}
        </div>
        <Sound name="Let the game begin" onClick={() => playSound()} />
        <CountDown
          countDownText="Time left"
          countDownTimerSeconds="seconds"
        />
      </div>
    </>
  );
};
export default Game;
