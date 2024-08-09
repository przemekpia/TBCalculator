import { createSlice } from "@reduxjs/toolkit";

const initialStatsState = {
  guardsmanBonus: 1 + 1.568,
  specialistsBonus: 1 + 2.403,
  armyBonus: 1 + 1.5,
  leadership: 15486,
};

const statsSlice = createSlice({
  name: "stats",
  initialState: initialStatsState,
  reducers: {
    setGuardsmanBonus(state, action) {
      state.guardsmanBonus = 1 + action.payload / 100;
    },
    setSpecialistsBonus(state, action) {
      state.specialistsBonus = 1 + action.payload / 100;
    },
    setArmyBonus(state, action) {
      state.armyBonus = 1 + action.payload / 100;
    },
    setLeadership(state, action) {
      state.leadership = action.payload;
    },
  },
});

export const statsActions = statsSlice.actions;

export const statsReducer = statsSlice.reducer;
