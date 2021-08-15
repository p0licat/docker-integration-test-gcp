import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface CounterState {
  featuredUserId: number;
  featuredCompanyId: number | null;
}

const initialState: CounterState = {
  featuredUserId: 0,
  featuredCompanyId: null,
};

export const frontpageSlice = createSlice({
  name: "listOfEventsSlice",
  initialState,
  reducers: {
    increment: (state) => {},
  },
});

export const { increment } = frontpageSlice.actions;

export const selectFeaturedUserId = (state: RootState) =>
  state.frontpageSliceReducer.featuredUserId;
export const selectFeaturedCompanyId = (state: RootState) =>
  state.frontpageSliceReducer.featuredCompanyId;

export default frontpageSlice.reducer;
