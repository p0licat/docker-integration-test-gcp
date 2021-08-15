import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";
import { PersonalEvent } from "./types";

enum RequestState {
  NotStarted,
  Requested,
  RequestSucceded,
  RequestFailed,
}

export interface CounterState {
  eventList: Array<PersonalEvent>;

  fetchItemsStatus: string;
  fetchItemsStatusType: RequestState;
}

const initialState: CounterState = {
  fetchItemsStatus: "idle",
  fetchItemsStatusType: RequestState.NotStarted,
  eventList: [
    {
      key: 0,
      id: 0,
      description: "Sample event.",
      date: new Date(Date.now()),
    },
    {
      key: 1,
      id: 1,
      description: "Sample event.",
      date: new Date(Date.now()),
    },
    {
      key: 2,
      id: 2,
      description: "Sample event.",
      date: new Date(Date.now()),
    },
  ],
};

export interface IBackendEvent {
  date: Date;
  description: string;
  id: number;
}

export interface IBackendEventList {
  events: Array<IBackendEvent>;
}

export const fetchItems = createAsyncThunk("eventList/fetchItems", async () => {
  const response = await axios.get<IBackendEventList>(
    `http://${process.env.REACT_APP_ADDRESS}:5001/getFrequencyEvents`
  );

  let cx: Array<IBackendEvent> = response.data.events;

  const items: PersonalEvent[] = cx.map((x: IBackendEvent) => {
    const pe: PersonalEvent = {
      key: x.id,
      id: x.id,
      description: "Found " + x.description + " new records.",
      date: new Date(x.date),
    };
    return pe;
  });
  // console.log(items);
  return { eventItems: items };
});

export const listOfEventsSlice = createSlice({
  name: "listOfEventsSlice",
  initialState,
  reducers: {
    increment: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.fetchItemsStatusType = RequestState.Requested;
        state.fetchItemsStatus = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.fetchItemsStatusType = RequestState.RequestSucceded;
        state.eventList = action.payload.eventItems;
        state.fetchItemsStatus = "succeeded";
      });
  },
});

export const { increment } = listOfEventsSlice.actions;

export const selectListOfEvents = (state: RootState) =>
  state.listOfEventsReducer.eventList;

export const selectFetchStatus = (state: RootState) =>
  state.listOfEventsReducer.fetchItemsStatus;

export default listOfEventsSlice.reducer;
