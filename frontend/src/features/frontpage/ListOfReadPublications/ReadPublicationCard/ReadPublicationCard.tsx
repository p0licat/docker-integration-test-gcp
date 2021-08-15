import {
  Card,
  createTheme,
  Grid,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { ReadPublication } from "../../../components/Frontpage/ReadPublicationsSection/types/types";

export interface ReadPublicationCardProps {
  publication: ReadPublication;
}

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
    fontFamily: "'Ubuntu Mono', monospace",
  },
});

theme.typography.h3 = {
  fontSize: "1.2rem",
  fontFamily: "'Ubuntu Mono', monospace",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
};

theme.typography.h5 = {
  fontSize: "1.2rem",
  fontFamily: "'Ubuntu Mono', monospace",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
};

theme.typography.h6 = {
  fontSize: "0.8rem",
  fontFamily: "'Ubuntu Mono', monospace",
  "@media (min-width:600px)": {
    fontSize: "0.8rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
};

theme.typography.h4 = {
  fontSize: "1.2rem",
  fontFamily: "'Ubuntu Mono', monospace",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
    fontFamily: "'Ubuntu Mono', monospace",
  },
};

export function ReadPublicationCard(props: ReadPublicationCardProps) {
  return (
    <ThemeProvider theme={theme}>
      <Card>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">
              Title: {props.publication.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Description: {props.publication.description}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Tags: {props.publication.tags}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Authors: {props.publication.authors}
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
}
