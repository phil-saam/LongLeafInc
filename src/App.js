// import withRoot from "./modules/withRoot";
import React from "react";

import AppAppBar from "./modules/views/AppAppBar";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import AppFooter from "./modules/views/AppFooter";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Redirect, Switch } from "react-router-dom";

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
    <React.Fragment>
      <AppAppBar links={links} style={{ marginBottom: 100 }} />

      <div className={classes.appBarSpacer}> </div>
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          {/* <Route path="/aboutus" component={AboutUs} /> */}
          <Route path="/contact" component={Contact} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
      <AppFooter />
    </React.Fragment>
  );
}

export default withStyles(styles)(Index);
