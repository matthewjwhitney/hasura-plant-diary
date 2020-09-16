import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

import NavList from "./NavList";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const Nav = (props) => {
  const { handleMobileDrawerToggle, mobileDrawerOpen } = props;
  const classes = useStyles();

  return (
    <nav className={classes.drawer}>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileDrawerOpen}
          onClose={handleMobileDrawerToggle}
          classes={{ paper: classes.drawerPaper }}
          ModalProps={{ keepMounted: true }}
        >
          <NavList handleMobileDrawerToggle={handleMobileDrawerToggle} />
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          classes={{ paper: classes.drawerPaper }}
          variant="permanent"
          open
        >
          <Toolbar />
          <NavList />
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Nav;
