import { createTheme } from "@mui/material/styles";
// Create a theme instance.
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#00c4ff",
    },
    secondary: {
      main: "#fff089",
    },
    error: {
      main: "#CC1236",
    },
    accent: {
      main: "hsla(116, 89%, 63%, 1)",
      secondary: "hsla(116, 89%, 25%, 1)",
    },
    text: {
      main: "#000",
    },
    toggle: {
      main: "#FFF",
    },
    background: {
      main: "#FFF",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#004ab9",
    },
    secondary: {
      main: "#ffa255",
    },
    error: {
      main: "#CC1236",
    },
    accent: {
      main: "hsla(105, 30%, 50%, 1)",
      secondary: "hsla(105, 30%, 25%, 1)",
    },
    text: {
      main: "#000",
    },
    toggle: {
      main: "#000",
    },
    background: {
      main: "#0B0B45",
    },
  },
});

export { lightTheme, darkTheme };
