import './Sound.scss';
import { FC } from 'react';

type SoundProps = {
  name: string,
  onClick: () => void;
}

const Sound:FC<SoundProps> = ({ name, onClick }) => (
  <div className="sound">
    <button
      className="sound__button"
      onClick={onClick}
    >
      {name}
    </button>
  </div>
);

export default Sound;
