import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Typography from "../components/Typography";
import curvyLines from "../../img/productCurvyLines.png";

const styles = (theme) => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden",
  },
  container: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(15),
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(0, 5),
  },

  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
  title: {
    fontSize: 27,
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7,
  },
  button: {
    marginTop: theme.spacing(8),
  },
});

function ProductHowItWorks(props) {
  const { classes } = props;

  const categories = [
    {
      title: "Website Creation",
      body: `We can build any website imaginable from small businesses
  sites to large eCommerce platforms with thousands of
  products. Now more than ever an online store is critical
  to growing your business, we will have yours up and
  selling.`,
      list: ["Wordpress", "Web Flow", "Drupal", "Coded Websites"],
    },
    {
      title: "Search Engine Optimization",
      body: `paid advertising, social media, and other online platforms can generate traffic to your website, but the majority of online traffic is driven by search engines.
      Improving your position on google searches means more business we can help.`,
      list: [
        "SEO",
        "Keyword Monitoring",
        "Link Building",
        "User Experience",
        "Local SEO",
      ],
    },
    {
      title: "Digital Marketing",
      body: `We can help promote your image and company to a wide audience. Let us build your brand, our creative services can give your business the look it deserves`,
      list: ["Google Ads", "Facebook Ads", "Logo Design", "Print Materials"],
    },
  ];

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src={curvyLines}
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography variant="h4" marked="center" component="h2">
          Our Services
        </Typography>

        <Grid container maxWidth="xl" spacing={5}>
          {categories.map((category) => (
            <Grid item xs={12} md={4}>
              <Typography align="center" className={classes.title}>
                {category.title}
              </Typography>
              <Grid container>
                <Grid item xs>
                  <Typography variant="h5">{category.body}</Typography>
                </Grid>
                {category.list.length > 0 ? (
                  <Grid item xs={12} sm={12}>
                    <ul>
                      {category.list.map((tool) => (
                        <li>
                          <Typography variant="h6">{tool}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          ))}
          {/* <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>2.</div>

                <Typography variant="h5" align="center">
                  We put together a prototype design for approval
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>3.</div>
                <img
                  src="/static/themes/onepirate/productHowItWorks3.svg"
                  alt="clock"
                  className={classes.image}
                />
                <Typography variant="h5" align="center">
                  {"New offers every week. New experiences, new surprises. "}
                  {"Your Sundays will no longer be alike."}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          className={classes.button}
          component="a"
          href="/premium-themes/onepirate/sign-up/"
        >
          Get started
        </Button> */}
        </Grid>
      </Container>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHowItWorks);
