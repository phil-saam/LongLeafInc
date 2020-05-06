import React from "react";
import PropTypes from "prop-types";
import AppBarCollapse from "../components/AppBarCollapse";

import LightLogo from "../../img/LongLeafLogo.png";

// Mui
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "@material-ui/core/Link";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    height: "50px",
  },

  navigation: {},
  toggleDrawer: {},
  appTitle: {},
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <AppBar position="sticky" className={classes.navigation}>
      <Toolbar>
        <img src={LightLogo} className={classes.logo} alt="Light Logo for A9" />
        <Box p={1}></Box>
        <Link
          variant="h6"
          underline="none"
          color="inherit"
          className={classes.title}
          href="#"
        >
          {"Long Leaf Designs"}
        </Link>

        <AppBarCollapse links={props.links} />
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
