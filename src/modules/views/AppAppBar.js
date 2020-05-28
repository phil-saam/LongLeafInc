import React from "react";
import PropTypes from "prop-types";
import AppBarCollapse from "../components/AppBarCollapse";

import Logo from "../../img/LongLeafLogo.png";

// Mui
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
  },

  title: {
    flexGrow: 1,
  },
  logo: {
    height: "51px",
  },

  lld: {
    fontSize: "22px",
  },

  navigation: {},
  toggleDrawer: {},
  appTitle: {},

  // appBarSpacer: theme.mixins.toolbar,
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.navigation}>
        <Toolbar>
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href="/home"
            aria-label="home"
          >
            <Box display="flex" alignItems="center">
              <Box p={1}>
                <img
                  src={Logo}
                  className={classes.logo}
                  alt="Light Logo for A9"
                />
              </Box>
              <Box p={1} className={classes.lld}>
                {"Long Leaf Designs"}
              </Box>
            </Box>
          </Link>

          <AppBarCollapse links={props.links} />
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
