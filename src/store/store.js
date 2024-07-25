import { configureStore } from "@reduxjs/toolkit";
import {
  armyGuardsmenReducer,
  armySpecialistsReducer,
  armyMonstersReducer,
} from "./counter";

const store = configureStore({
  reducer: {
    guardsmen: armyGuardsmenReducer,
    specialists: armySpecialistsReducer,
    monsters: armyMonstersReducer,
  },
});

export default store;
