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
    setGuardsmanBonus(state, action) {
      state.guardsmanBonus = action.payload ;
      state.guardsmanModifier = 1 + action.payload / 100;
    },
    setSpecialistsBonus(state, action) {
      state.specialistsBonus = action.payload ;
      state.specialistsModifier = 1 + action.payload / 100;
    },
    setArmyBonus(state, action) {
      state.armyBonus = action.payload ;
      state.armyModifier = 1 + action.payload / 100;
    },
    setLeadership(state, action) {
      state.leadership = action.payload;
    },
    smallDecreaseGuardsmanBonus(state) {
      state.guardsmanBonus -= 0.1;
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
    mediumDecreaseGuardsmanBonus(state) {
      state.guardsmanBonus -= 1 ;
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
    largeDecreaseGuardsmanBonus(state) {
      state.guardsmanBonus -= 10 ;
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
    smallIncreaseGuardsmanBonus(state) {
      state.guardsmanBonus += 0.1 ;
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
    mediumIncreaseGuardsmanBonus(state) {
      state.guardsmanBonus += 1 ;
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
    largeIncreaseGuardsmanBonus(state) {
      state.guardsmanBonus += 10 ;
      state.guardsmanModifier = 1 + state.guardsmanBonus / 100;
    },
  },
});

export const statsActions = statsSlice.actions;

export const statsReducer = statsSlice.reducer;
