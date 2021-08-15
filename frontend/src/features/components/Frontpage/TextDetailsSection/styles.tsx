import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardStyle: {
      marginTop: 15,
      maxWidth: "69%",
      margin: "auto",
    },
  })
);
