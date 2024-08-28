import { createSlice } from "@reduxjs/toolkit";

const initialStatsState = {
  guardsmanBonus: 0,
  guardsmanModifier: 0,
  specialistsBonus: 0,
  specialistsModifier: 0,
  armyBonus: 0,
  armyModifier: 0,
  leadership: 0,
};

const statsSlice = createSlice({
  name: "stats",
  initialState: initialStatsState,
  reducers: {
    modifyGuardsmanBonus(state, action) {
      state.guardsmanBonus = Math.max(parseFloat((state.guardsmanBonus+action.payload).toFixed(3)), 0);
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
    resetGuardsmanBonus(state) {
      state.guardsmanBonus = 0;
      state.guardsmanModifier = 0;
    },
    modifySpecialistBonus(state, action) {
      state.specialistsBonus = Math.max(parseFloat((state.specialistsBonus+action.payload).toFixed(3)), 0);
      state.specialistsModifier = 1 + state.specialistsModifier / 100;
    },
    resetSpecialistBonus(state) {
      state.specialistsBonus = 0;
      state.specialistsModifier = 0;
    },
    modifyArmyBonus(state, action) {
      state.armyBonus = Math.max(parseFloat((state.armyBonus+action.payload).toFixed(3)), 0);
      state.armyModifier = 1 + state.armyModifier / 100;
    },
    resetArmyBonus(state) {
      state.armyBonus = 0;
      state.armyModifier = 0;
    },
    modifyLeadership(state, action) {
      state.leadership = Math.max(parseFloat((state.leadership+action.payload).toFixed(3)), 0);
    },
    resetLeadership(state) {
      state.leadership = 0;
    },
  },
});

export const statsActions = statsSlice.actions;

export const statsReducer = statsSlice.reducer;
