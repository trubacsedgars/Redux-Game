import './CountDown.scss';
import {
  FC, useState, useEffect,
} from 'react';

type CountDownProps = {
  countDownText: string
  countDownTimerSeconds: string
}

const CountDown: FC<CountDownProps> = ({ countDownText, countDownTimerSeconds }) => {
  const [seconds, setSeconds] = useState(180);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameReminder, setGameReminder] = useState(false);
  const [gameStatus, setGameStatus] = useState(false);

  useEffect(() => {
    const timeOnSession = setTimeout(() => {
      if (seconds > 66) {
        setSeconds(seconds - 1);
      } else if (seconds > 60) {
        setGameStarted(false);
        setGameReminder(true);
        setSeconds(seconds - 1);
      } else if (seconds > 0) {
        setGameReminder(false);
        setGameStarted(true);
        setSeconds(seconds - 1);
      } else {
        setGameStarted(false);
        setGameStatus(true);
      }
    }, 1000);
    return () => clearTimeout(timeOnSession);
  }, [seconds]);

  return (
    <div className="countdown">
      <div
        className="countdown__content"
        style={{ color: gameStarted ? 'red' : 'white' }}
      >
        {`${countDownText}: 
        ${seconds}
        ${countDownTimerSeconds}`}
        <div
          style={{ color: gameStatus ? 'red' : 'white' }}
          className="countdown__content-rules"
        >
          {gameStatus && !seconds ? 'Game over!' : ''}
        </div>
        <div className="countdown__content-rules">
          {gameStarted ? 'Game has been started' : 'Please read rules and prepare for a game.'}
        </div>
        <div
          style={{ color: gameReminder ? 'red' : 'white' }}
          className="countdown__content-rules"
        >
          {gameReminder ? 'Please press button "Let the game begin"' : ''}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
