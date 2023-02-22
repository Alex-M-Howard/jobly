import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import NavBar from "@/components/NavBar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme={true} />
        <NavBar toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
