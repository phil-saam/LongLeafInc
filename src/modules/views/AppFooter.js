import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Link, Box, Grid } from "@material-ui/core";
import Typography from "../components/Typography";

function Copyright() {
  return (
    <React.Fragment>
      {"© "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    minHeight: "170px",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.container}
      >
        <Grid item xs={12} sm={3}>
          © Copyright 2020: Long Leaf Designs
        </Grid>
        <Grid row justify="center" alignItems="center">
          <Grid item xs={12}>
            Contact Us
          </Grid>
          <Grid item xs={12}>
            <Link href="mailto:info@longleafdesigns.com">
              info@longleafdesigns.com
            </Link>
          </Grid>
          <Grid item xs={12}>
            <span itemprop="telephone">
              <Link href="tel:+9195260822‬">(919) 526-0822‬</Link>
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Typography>
  );
}
