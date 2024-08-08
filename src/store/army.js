import { createSlice } from "@reduxjs/toolkit";

const initialArmyState = {
  selectedMonsters: [],
  selectedUnits: [],
  selectedMercenaries: [],
};

const armySlice = createSlice({
  name: "army",
  initialState: initialArmyState,
  reducers: {
    setSelectedMonsters(state, action) {
      state.selectedMonsters = action.payload;
    },
    setSelectedUnits(state, action) {
      state.selectedUnits = action.payload;
    },
    setSelectedMercenaries(state, action) {
      state.selectedMercenaries = action.payload;
    },
  },
});

export const armyActions = armySlice.actions;

export const armyReducer = armySlice.reducer;
