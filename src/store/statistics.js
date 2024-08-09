import { createSlice } from "@reduxjs/toolkit";

const initialStatsState = {
  guardsmanBonus: 1,
  specialistsBonus: 1,
  armyBonus: 1,
  leadership: 15486,
};

const statsSlice = createSlice({
  name: "stats",
  initialState: initialStatsState,
  reducers: {
    setGuardsmanBonus(state, action) {
      state.guardsmanBonus = action.payload;
    },
    setSpecialistsBonus(state, action) {
      state.specialistsBonus = action.payload;
    },
    setArmyBonus(state, action) {
      state.armyBonus = action.payload;
    },
    setLeadership(state, action) {
      state.leadership = action.payload;
    },
  },
});

export const statsActions = statsSlice.actions;

export const statsReducer = statsSlice.reducer;
