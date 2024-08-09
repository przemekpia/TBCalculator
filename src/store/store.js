import { configureStore } from "@reduxjs/toolkit";
import { armyReducer } from "./army";
import { statsReducer } from "./statistics";

const store = configureStore({
  reducer: {
    army: armyReducer,
    stats: statsReducer,
  },
});

export default store;
