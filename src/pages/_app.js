import "@/styles/globals.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "../theme";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  // Load saved preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);
  // Save preference
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
