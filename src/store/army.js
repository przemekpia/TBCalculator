import { createSlice } from "@reduxjs/toolkit";

const initialArmyState = {
  selectedUnits: [],
};

const armySlice = createSlice({
  name: "army",
  initialState: initialArmyState,
  reducers: {
    setSelectedUnits(state, action) {
      state.selectedUnits = action.payload;
    },
  },
});

export const armyActions = armySlice.actions;

export const armyReducer = armySlice.reducer;
