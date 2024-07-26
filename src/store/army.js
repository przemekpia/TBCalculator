import { createSlice } from "@reduxjs/toolkit";

const initialArmyState = { selectedMonsters: [], selectedUnits: [] };

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
  },
});

export const armyActions = armySlice.actions;

export const armyReducer = armySlice.reducer;
