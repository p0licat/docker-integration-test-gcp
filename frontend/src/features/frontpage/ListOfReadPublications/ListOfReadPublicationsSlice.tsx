import { GridColDef, GridRowsProp } from "@material-ui/data-grid";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../../app/store";
import { ReadPublication } from "../../components/Frontpage/ReadPublicationsSection/types/types";

enum RequestState {
  NotStarted,
  Requested,
  RequestSucceded,
  RequestFailed,
}

export interface CounterState {
  pubsList: Array<ReadPublication>;
  pubsGridList: Array<ReadPublication>;
  pubsGridRows: GridRowsProp;
  pubsGridCols: GridColDef[];

  fetchItemsStatus: string;
  fetchItemsStatusType: RequestState;
}

const initialState: CounterState = {
  fetchItemsStatus: "idle",
  fetchItemsStatusType: RequestState.NotStarted,
  pubsGridRows: [],
  pubsGridCols: [
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
      minWidth: 350,
    },
    {
      field: "Tags",
      headerName: "Tags",
      flex: 1,
      minWidth: 350,
    },
    // { field: "Description", headerName: "Description", width: 150 },
    {
      field: "Date",
      headerName: "Date",
      flex: 1,
      minWidth: 350,
    },
    // { field: "Authors", headerName: "Authors", width: 150 },
  ],
  pubsGridList: [
    {
      key: 0,
      id: 0,
      description: "asdf",
      title: "ffff",
      dateRead: new Date(Date.now()),
      tags: "asdf",
      authors: "asdff",
    },
  ],
  pubsList: [
    {
      key: 0,
      id: 0,
      description: "asdf",
      title: "ffff",
      dateRead: new Date(Date.now()),
      tags: "asdf",
      authors: "asdff",
    },
    {
      key: 1,
      id: 1,
      description: "dddd",
      title: "ffff",
      dateRead: new Date(Date.now()),
      tags: "asdf",
      authors: "asdff",
    },
  ],
};

export interface IPublicationEntry {
  id: number;
  key: number;
  Title: string;
  Date: Date;
  Tags: string;
}

export interface IBackendPublicationEntry {
  browse_url: string;
  browsing_date: Date;
  id: number;
  tags: string;
}

export interface IBackendPublicationEntryList {
  publications: Array<IBackendPublicationEntry>;
}

export const fetchPublications = createAsyncThunk(
  "eventList/fetchPublications",
  async () => {
    const response = await axios.get<IBackendPublicationEntryList>(
      `http://${process.env.REACT_APP_ADDRESS}:5001/getLast50Papers`
    );

    let cx: Array<IBackendPublicationEntry> = response.data.publications;

    const items: IPublicationEntry[] = cx.map((x: IBackendPublicationEntry) => {
      const pe: IPublicationEntry = {
        key: x.id,
        id: x.id,
        Tags: x.tags,
        Date: new Date(x.browsing_date),
        Title: x.browse_url,
      };
      return pe;
    });
    // console.log(items);
    return { publications: items };
  }
);

export const listOfReadPublicationsSlice = createSlice({
  name: "listOfReadPublications",
  initialState,
  reducers: {
    increment: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPublications.pending, (state) => {
        state.fetchItemsStatusType = RequestState.Requested;
        state.fetchItemsStatus = "loading";
      })
      .addCase(fetchPublications.fulfilled, (state, action) => {
        state.fetchItemsStatusType = RequestState.RequestSucceded;
        state.pubsGridRows = action.payload.publications;
        state.fetchItemsStatus = "succeeded";
      });
  },
});

export const { increment } = listOfReadPublicationsSlice.actions;

export const selectFetchStatusPubs = (state: RootState) =>
  state.listOfReadPublicationsReducer.fetchItemsStatus;

export const selectReadPublications = (state: RootState) =>
  state.listOfReadPublicationsReducer.pubsList;

export const selectGridColumns = (state: RootState) =>
  state.listOfReadPublicationsReducer.pubsGridCols;

export const selectGridRows = (state: RootState) =>
  state.listOfReadPublicationsReducer.pubsGridRows;

export default listOfReadPublicationsSlice.reducer;
