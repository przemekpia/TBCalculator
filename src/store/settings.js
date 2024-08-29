import { createSlice } from "@reduxjs/toolkit";

const initialSettingsState = {
  selectedLanguage: "PL", 
};

const settingsSlice = createSlice({
  name: "settings",
  initialState: initialSettingsState,
  reducers: {
    setLanguage(state, action) {
      state.selectedLanguage = action.payload;
    },
  },
});

export const settingsActions = settingsSlice.actions;

export const settingsReducer = settingsSlice.reducer;
