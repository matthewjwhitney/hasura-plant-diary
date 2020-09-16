import React, { useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blueGrey, brown } from "@material-ui/core/colors";

import Header from "./Header/Header";
import Nav from "./Nav";
import Main from "./Main/Main";

const useStyles = makeStyles((theme) => ({
  app: {
    display: "flex",
  },
}));

const App = () => {
  const classes = useStyles();
  // TODO: #2 replace parent/child state lifting with context provider
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const handleMobileDrawerToggle = () => setMobileDrawerOpen(!mobileDrawerOpen);
  const [darkMode, setDarkMode] = useState(true);
  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? "dark" : "light",
          primary: blueGrey,
          secondary: brown,
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.app}>
        <Header
          // handleMobileDrawerToggle={handleMobileDrawerToggle}
          darkMode={darkMode}
          handleToggleDarkMode={handleToggleDarkMode}
        />
        {/* <Nav
          handleMobileDrawerToggle={handleMobileDrawerToggle}
          mobileDrawerOpen={mobileDrawerOpen}
        /> */}
        <Main />
      </div>
    </ThemeProvider>
  );
};

export default App;
