import createTheme from "@material-ui/core/styles/createTheme";

export const personalTheme = () => {
  const theme = createTheme({
    typography: {
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
    fontSize: "1.2rem",
    fontFamily: "'Ubuntu Mono', monospace",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
      fontFamily: "'Ubuntu Mono', monospace",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
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

  return theme;
};
