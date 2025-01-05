import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#54cce8",
      light: "#76D6EC",
      dark: "#3A8EA2",
    },
    secondary: {
      main: "#A2F509",
      light: "#B4F73A",
      dark: "#71AB06",
    },
  },
  typography: {
    fontFamily: "Yanone Kaffeesatz",
    fontSize: 14,
  },
});
