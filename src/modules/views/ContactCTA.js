import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "../components/Typography";

import notebook from "../../img/notebook.jpg";
import mailIcon from "../../img/mailIcon.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(20),
    display: "flex",
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(8, 3),
    boxShadow: "0 10px 6px -6px #777",
  },
  cardContent: {
    maxWidth: 400,
    color: "white",
    margin: "auto",
    display: "inline-block",
  },

  button: {
    width: "100%",
    color: "white",
    marginTop: 20,
    backgroundColor: theme.palette.secondary.light,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  imagesWrapper: {
    position: "relative",
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
  },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600,
  },
  icon: { marginTop: 20 },
});

function ContactCTA(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <Box className={classes.cardContent}>
              <Typography
                variant="h2"
                color="inherit"
                gutterBottom
                align="center"
              >
                Contact Us
              </Typography>
              <Typography variant="h5" align="center" gutterBottom>
                Get started building your online presence with Long Leaf
                Designs.
              </Typography>
              <Box
                component={Link}
                to="/contact"
                style={{ textDecoration: "none" }}
              >
                <Button
                  type="submit"
                  color="white"
                  variant="contained"
                  className={classes.button}
                >
                  Get Started
                </Button>
                <img src={mailIcon} alt="email icon" className={classes.icon} />
              </Box>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src={notebook}
              alt="web design notebook"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
}

ContactCTA.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactCTA);
