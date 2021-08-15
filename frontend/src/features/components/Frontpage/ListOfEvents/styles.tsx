import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: 400,
      margin: "auto",
    },
    divStyle: {
      marginTop: 15,
    },
    typography: {
      fontSize: 14,
      fontFamily: "'Ubuntu Mono', monospace",
    },
  })
);
