import { createTheme } from "@mui/material/styles";
// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00c4ff",
    },
    secondary: {
      main: "#92f183",
    },
    error: {
      main: "#CC1236",
    },
    accent: {
      main: "#fff089",
    },
    text: {
      main: "#000",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#005168",
    },
    secondary: {
      main: "#5E9A54",
    },
    error: {
      main: "#CC1236",
    },
    accent: {
      main: "#ffa255",
    },
    text: {
      main: "#000",
    },
  },
});

export { lightTheme, darkTheme };
