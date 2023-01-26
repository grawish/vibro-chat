import { createSlice } from "@reduxjs/toolkit";

export interface GlobalDataState {
  counter: number;
}

const initialState: GlobalDataState = {
  counter: 0,
};

export const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {
    incrementState: (state) => {
      state.counter += 1;
    },
    decrementState: (state) => {
      state.counter -= 1;
    },
    incrementStateByAmount: (state, action) => {
      state.counter += action.payload;
    },
    decrementStateByAmount: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const {
  incrementState,
  decrementState,
  incrementStateByAmount,
  decrementStateByAmount,
} = globalDataSlice.actions;

export default globalDataSlice.reducer;
