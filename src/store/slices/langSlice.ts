import type { ILanguageState } from "@interfaces";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ILanguageState = { lang: "en" };

const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    switchLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { switchLang } = langSlice.actions;

export default langSlice.reducer;
