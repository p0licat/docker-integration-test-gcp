import { List, ListItem, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { store } from "../../../../app/store";
import {
  fetchItems,
  selectFetchStatus,
  selectListOfEvents,
} from "../../../frontpage/ListOfEvents/ListOfEventsSlice";
import { PersonalEvent } from "../../../frontpage/ListOfEvents/types";
import { useStyles } from "./styles";

export interface ListOfEventsProps {}

export function ListOfEvents(props: ListOfEventsProps) {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  const storeEvents = useAppSelector(selectListOfEvents);
  const fetchStatus = useAppSelector(selectFetchStatus);

  useEffect(() => {
    if (fetchStatus === "idle") {
      store.dispatch<any>(fetchItems()).then(() => {
        console.log("Fetched all events.");
      });
    }
  }, [fetchStatus, dispatch]);

  return (
    <div className={classes.divStyle}>
      <List className={classes.root}>
        {storeEvents.map((i: PersonalEvent) => {
          return (
            <ListItem key={i.key}>
              <Typography variant="h6">
                {i.date.toDateString()} | {i.description}
              </Typography>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
