import React from "react";
import { makeStyles } from "@material-ui/core";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes.json";
import views from "../views";

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  main: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <main className={classes.main}>
      <div className={classes.appBarSpacer} />
      <Switch>
        <Redirect exact from="/" to="/Plants" />
        {routes.map((route) => (
          <Route
            key={route.path}
            exact
            path={route.path}
            component={views[route.view]}
          />
        ))}
      </Switch>
    </main>
  );
};

export default Main;
