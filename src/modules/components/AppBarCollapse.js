import React from "react";

import { withStyles } from "@material-ui/core/styles";
import ButtonAppBarCollapse from "./ButtonAppBarCollapse";
import Link from "@material-ui/core/Link";

const styles = (theme) => ({
  root: {
    position: "absolute",
    right: 0,
  },
  buttonBar: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    margin: "10px",
    // paddingLeft: "16px",
    right: 0,
    position: "relative",
    width: "95%",
    background: "transparent",
  },
  rightLink: {
    fontSize: 13,
    color: theme.palette.common.white,
    marginRight: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppBarCollapse(props) {
  const { classes, links } = props;

  return (
    <div className={classes.root}>
      <ButtonAppBarCollapse>
        {links.map((link) => (
          <Link
            key={link.text}
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href={link.to}
          >
            {link.text}
          </Link>
        ))}
      </ButtonAppBarCollapse>
      <div className={props.classes.buttonBar} id="appbar-collapse">
        {links.map((link) => (
          <Link
            key={link.text}
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href={link.to}
          >
            {link.text}
          </Link>
        ))}
        {/* <Link
          variant="h6"
          underline="none"
          className={clsx(classes.rightLink, classes.linkSecondary)}
          href="/premium-themes/onepirate/sign-up/"
        >
          {"Sign Up"}
        </Link> */}
      </div>
    </div>
  );
}
export default withStyles(styles)(AppBarCollapse);
