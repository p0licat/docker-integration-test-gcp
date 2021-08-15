import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      width: "80%",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      // maxHeight: 400,
      margin: "auto",
    },
    divStyle: {
      marginTop: 15,
    },
  })
);
