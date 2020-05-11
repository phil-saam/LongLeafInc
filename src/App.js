// import withRoot from "./modules/withRoot";
import React from "react";

import AppAppBar from "./modules/views/AppAppBar";
import Home from "./Home";
// import AboutUs from "./AboutUs"; coming soon!

import Contact from "./Contact";
import AppFooter from "./modules/views/AppFooter";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./modules/views/NotFound";

const styles = (theme) => ({
  appBarSpacer: theme.mixins.toolbar,
});
const links = [
  { text: "Home", to: "/home" },

  { text: "Contact", to: "/contact" },
];

function Index(props) {
  const { classes } = props;
  return (
    <div style={{ minHeight: "100vh" }}>
      <AppAppBar links={links} style={{ marginBottom: 100 }} />

      <div className={classes.appBarSpacer}> </div>
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <AppFooter style={{ position: "absolute" }} />
    </div>
  );
}

export default withStyles(styles)(Index);