import { useState, useEffect, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "@/context/theme";
import createEmotionCache from "../config/createEmotionCache";
import NavBar from "@/components/NavBar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import UserContextProvider from "@/context/UserContext";
import UserContext from "@/context/UserContext";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [theme, setTheme] = useState(null);
  const router = useRouter();
  const currentRoute = router.route;
  
  const acceptableRoutes = ['/', '/login', '/signup']

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setTheme(darkTheme);
    } else {
      setTheme(lightTheme);
    }
  }, []);

  useEffect(() => {
    if (theme) {
      let mode = theme.palette.mode;
      localStorage.setItem("theme", mode);
    }
  }, [theme])

  if (!theme) {
    return <Loading />;
  }


  if (!localStorage.username && acceptableRoutes.indexOf(currentRoute) === -1) {
    router.push('/login')
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme={true} />
        <UserContextProvider>
          <NavBar toggleTheme={toggleTheme} />
          <Component {...pageProps} />
        </UserContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
