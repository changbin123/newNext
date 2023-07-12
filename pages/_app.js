import "../styles/globals.css";

import * as React from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  // TODO: update theme mode properly
  const router = useRouter();
  const { theme } = router.query;

  // configure theme provider
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: light)");

  const lightTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "light",
        },
      }),
    [prefersDarkMode, theme]
  );
  const darkTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
        typography: {
          h2: {
            fontWeight: 500,
            fontSize: "3.5rem",
          },
          h4: {
            fontWeight: 600,
          },
        },
      }),
    [prefersDarkMode, theme]
  );

  const normalDarktheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: "dark",
        },
        typography: {
          h2: {
            fontSize: "1.25rem",
            fontWeight: 500,
          },
          h4: {
            fontSize: "1rem",
            fontWeight: 400,
          },
        },
      }),
    [prefersDarkMode, theme]
  );

  const themes = {
    light: lightTheme,
    dark: darkTheme,
    "normal-dark": normalDarktheme,
  };

  return (
    <ThemeProvider theme={themes[theme] ?? lightTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
}
