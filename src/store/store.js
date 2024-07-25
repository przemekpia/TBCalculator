import { configureStore } from "@reduxjs/toolkit";
import {
  armyGuardsmenReducer,
  armySpecialistsReducer,
  armyMonstersReducer,
  armyReducer,
} from "./army";

const store = configureStore({
  reducer: {
    guardsmen: armyGuardsmenReducer,
    specialists: armySpecialistsReducer,
    monsters: armyMonstersReducer,
    army: armyReducer,
  },
});

export default store;
