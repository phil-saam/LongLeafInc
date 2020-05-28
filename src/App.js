// import withRoot from "./modules/withRoot";
import React from "react";

import AppAppBar from "./modules/views/AppAppBar";
import Home from "./Home";
import eCommerce from "./eCommerce";
import Development from "./Development";
import Contact from "./Contact";
import AppFooter from "./modules/views/AppFooter";
import withStyles from "@material-ui/core/styles/withStyles";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./modules/views/NotFound";
import AboutUs from "./AboutUs";

const styles = (theme) => ({
  appBarSpacer: theme.mixins.toolbar,
});
const links = [
  { text: "E-Commerce", to: "/ecommerce" },
  { text: "Web Development", to: "/webdev" },
  { text: "About Us", to: "/about" },
  // { text: "Digital Marketing SEO", to: "/marketing" },
  { text: "Contact", to: "/contact" },
];

function Index(props) {
  const { classes } = props;
  return (
    <div style={{ minHeight: "100vh" }}>
      <AppAppBar links={links} style={{ marginBottom: 100 }} />
      <div className={classes.appBarSpacer} />
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/ecommerce" component={eCommerce} />
          <Route path="/webdev" component={Development} />
          <Route path="/about" component={AboutUs} />
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
