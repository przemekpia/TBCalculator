import { configureStore } from "@reduxjs/toolkit";
import { armyReducer } from "./army";
import { statsReducer } from "./statistics";
import { settingsReducer } from "./settings";

const store = configureStore({
  reducer: {
    army: armyReducer,
    stats: statsReducer,
    settings: settingsReducer,
  },
});

export default store;
