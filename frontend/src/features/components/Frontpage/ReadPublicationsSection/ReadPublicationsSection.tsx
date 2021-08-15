import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import {
  fetchPublications,
  selectFetchStatusPubs,
  selectGridColumns,
  selectGridRows,
} from "../../../frontpage/ListOfReadPublications/ListOfReadPublicationsSlice";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { store } from "../../../../app/store";
import { useStyles } from "./styles";

export interface ReadPublicationsSectionProps {}

export function ReadPublicationsSection(props: ReadPublicationsSectionProps) {
  const dispatch = useAppDispatch();
  const classes = useStyles();

  const columns = useAppSelector(selectGridColumns);
  const rows = useAppSelector(selectGridRows);

  const fetchStatus = useAppSelector(selectFetchStatusPubs);

  useEffect(() => {
    if (fetchStatus === "idle") {
      store.dispatch<any>(fetchPublications()).then(() => {
        console.log("Fetched all events.");
      });
    }
  }, [fetchStatus, dispatch]);

  return (
    <div className={classes.divStyle}>
      <div style={{ height: 600, width: "100%" }}>
        <DataGrid className={classes.root} rows={rows} columns={columns} />
      </div>
    </div>
  );
}
