import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Tooltip,
  Icon,
} from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
import DarkIcon from "@material-ui/icons/Brightness4";
import LightIcon from "@material-ui/icons/Brightness5";

import { MaterialIcon } from "../components";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logoIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Header = (props) => {
  const {
    /* handleMobileDrawerToggle, */ darkMode,
    handleToggleDarkMode,
  } = props;
  const classes = useStyles();
  return (
    <header>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleMobileDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton> */}
          <Icon className={classes.logoIcon}>
            <MaterialIcon name="Eco" />
          </Icon>
          <Typography variant="h6" noWrap>
            hasura-plant-diary
          </Typography>
          <div style={{ flexGrow: 1 }} />
          <Tooltip title={darkMode ? "Enable Light Mode" : "Enable Dark Mode"}>
            <IconButton
              color="inherit"
              aria-label="toggle dark mode"
              onClick={handleToggleDarkMode}
            >
              {darkMode ? <LightIcon /> : <DarkIcon />}
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
