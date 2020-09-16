import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import routes from "../routes.json";

import { MaterialIcon } from "../components";

const NavLinkConnector = React.forwardRef((props, ref) => (
  <NavLink ref={ref} {...props} />
));

const NavList = (props) => {
  const { handleMobileDrawerToggle } = props;
  return (
    <List disablePadding>
      {routes.map((route) => (
        <ListItem
          button
          key={route.path}
          component={NavLinkConnector}
          to={route.path}
          activeClassName="Mui-selected"
          onClick={handleMobileDrawerToggle}
        >
          <ListItemIcon style={{ minWidth: 0, paddingRight: 16 }}>
            <MaterialIcon name={route.icon} />
          </ListItemIcon>
          <ListItemText primary={route.display} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
