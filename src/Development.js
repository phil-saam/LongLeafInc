import React from "react";
import { Helmet } from "react-helmet";
import Typography from "./modules/components/Typography";
import { Container, Grid, Box, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import growthIcon from "./img/growthIcon.png";
import designImage from "./img/laptop.jpg";
import mailIcon from "./img/mailIcon.png";

const styles = (theme) => ({
  container: {
    marginBottom: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  section: {
    display: "flex",
    overflow: "hidden",
    // backgroundColor: theme.palette.secondary.light,
    position: "relative",
  },

  grid: {
    marginTop: theme.spacing(4),
  },

  leadingText: {
    fontSize: 29,
  },

  button: {
    fontSize: 25,
    width: "20rem",
    color: "white",
    marginTop: 20,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  bottomButton: {
    marginBottom: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  background: {
    backgroundImage: `url(${designImage})`,
    backgroundColor: "#233d49",
    backgroundPosition: "40%, 0%",
    margin: "auto",
    width: "340px",
    height: "350px",
    WebkitClipPath:
      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
  },
});

const Development = (props) => {
  const { classes } = props;
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Long Leaf Designs Website Design.  We create custom beautiful website with test research based user experiences."
        />
        <link rel="canonical" href="https://www.longleafdesigns.com/webdev" />
        <title>Long Leaf Designs Web Development</title>
      </Helmet>
      <Box mt={6} className={classes.container}>
        <Typography
          variant="h4"
          marked="center"
          align="center"
          component="h4"
          gutterBottom
        >
          Website Development
        </Typography>
      </Box>
      <section className={classes.section}>
        <Container>
          <Grid container spacing={5} className={classes.grid}>
            <Grid item xs={12} md={7}>
              <Typography className={classes.leadingText} gutterBottom>
                Every business needs a unique website. Your website is often the
                first interaction people will have with your business, we make
                sure the first impression is a good one.
              </Typography>
              <Box py={3} style={{ textAlign: "center" }}>
                <img src={growthIcon} alt="Growth Icon" />
              </Box>
              <Typography className={classes.leadingText} gutterBottom>
                We create beautifully crafted web experiences that will engage
                your visitors. Grow your online presence and business with us.
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box className={classes.background}>
                <img
                  style={{ display: "none" }}
                  src={designImage}
                  alt="Web design laptop"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className={classes.section}>
        <Container>
          <Grid
            container
            alignItems="center"
            justify="center"
            spacing={5}
            className={classes.grid}
          >
            <Grid item xs={12}>
              <Typography className={classes.leadingText} gutterBottom>
                We know the right tool to use: From page builders like:
                Wordpress and Webflow to more advanced tools: like React,
                Angular, Node.
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.container}>
              <Typography className={classes.leadingText} gutterBottom>
                We are a result oriented designer, we strive for a user
                experience that delivers on your company goals. Don’t rely on
                off the shelf cookie cutter website generators, you need to set
                yourself apart. We will build a site that grows with you
              </Typography>
            </Grid>
            <Grid
              container
              className={classes.bottomButton}
              alignItems="center"
              justify="center"
            >
              <Grid item>
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
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default withStyles(styles)(Development);
