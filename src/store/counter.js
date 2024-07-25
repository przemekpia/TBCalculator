import { createSlice } from "@reduxjs/toolkit";

const initialArmyGuardsmenState = { selectedCellsGuards: [] };
const initialArmySpecialistsState = { selectedCellsSpecialists: [] };
const initialArmyMonstersState = { selectedCellsMonsters: [] };

const armyGuardsmenSlice = createSlice({
  name: "guardsmen",
  initialState: initialArmyGuardsmenState,
  reducers: {
    setSelectedCellsGuards(state, action) {
      state.selectedCellsGuards = action.payload;
    },
  },
});

const armySpecialistsSlice = createSlice({
  name: "specialists",
  initialState: initialArmySpecialistsState,
  reducers: {
    setSelectedCellsSpecialists(state, action) {
      state.selectedCellsSpecialists = action.payload;
    },
  },
});

const armyMonstersSlice = createSlice({
  name: "monsters",
  initialState: initialArmyMonstersState,
  reducers: {
    setSelectedCellsMonsters(state, action) {
      state.selectedCellsMonsters = action.payload;
    },
  },
});

export const armyGuardsmenActions = armyGuardsmenSlice.actions;
export const armySpecialistsActions = armySpecialistsSlice.actions;
export const armyMonstersActions = armyMonstersSlice.actions;

export const armyGuardsmenReducer = armyGuardsmenSlice.reducer;
export const armySpecialistsReducer = armySpecialistsSlice.reducer;
export const armyMonstersReducer = armyMonstersSlice.reducer;
