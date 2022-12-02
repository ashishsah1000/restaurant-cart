import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "item",
  initialState: {
    selectedItem: {},
    cart: [{}],
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    selectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, selectedItem } = itemSlice.actions;

export default itemSlice.reducer;
