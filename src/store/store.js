import { configureStore } from "@reduxjs/toolkit";
import { armyReducer } from "./army";

const store = configureStore({
  reducer: {
    army: armyReducer,
  },
});

export default store;
