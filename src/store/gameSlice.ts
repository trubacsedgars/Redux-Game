import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userSelection: '',
  computerSelection: '',
  userTotalScore: 0,
  computerTotalScore: 0,
  drawScore: 0,
  resultOfGame: '',
  // resultOfGame: [
  //   {
  //     win: '\'Hooray, YOU WON! 🏆\'',
  //   },
  //   {
  //     loose: 'Oh No... YOU LOSE! 🎭',
  //   },
  //   {
  //     draw: 'Dont\'\t give up, ITS A DRAW! 💣 ',
  //   },
  //   {
  //     init: '',
  //   },
  // ],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addUserSelection: (state, action) => {
      state.userSelection = action.payload;
    },
    addComputerSelection: (state, action) => {
      state.computerSelection = action.payload;
    },
    increaseUserScore: (state) => {
      state.userTotalScore += 1;
    },
    increaseComputerScore: (state) => {
      state.computerTotalScore += 1;
    },
    increaseTieScore: (state) => {
      state.drawScore += 1;
    },
    resultOfTheGame: (state, action) => {
      state.resultOfGame = action.payload;
    },
  },
});

export const {
  addUserSelection, addComputerSelection, increaseUserScore, increaseComputerScore, increaseTieScore, resultOfTheGame,
} = gameSlice.actions;

export const { reducer } = gameSlice;
