import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  timelineRoot: {
    minWidth: 1200,
    overflow: "scroll",
  },
  divRoot: {
    width: "90%",
    margin: "auto",
    overflow: "scroll",
  },
}));
