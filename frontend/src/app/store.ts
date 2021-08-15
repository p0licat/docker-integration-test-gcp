import {
  ThunkAction,
  Action,
  combineReducers,
  applyMiddleware,
  createStore,
} from "@reduxjs/toolkit";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import counterReducer from "../features/counter/counterSlice";
import frontpageSlice from "../features/frontpage/frontpageSlice";
import listOfEventsSlice from "../features/frontpage/ListOfEvents/ListOfEventsSlice";
import listOfReadPublicationsSlice from "../features/frontpage/ListOfReadPublications/ListOfReadPublicationsSlice";

export const combinedstore = combineReducers({
  frontpageSliceReducer: frontpageSlice,
  counter: counterReducer,
  listOfEventsReducer: listOfEventsSlice,
  listOfReadPublicationsReducer: listOfReadPublicationsSlice,
});

export const store = createStore(
  combinedstore,
  composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
