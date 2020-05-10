import React from "react";
import Typography from "./modules/components/Typography";
import { Container, Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import raleigh from "./img/raleigh.jpeg";
import ContactForm from "./modules/components/ContactForm";

const styles = (theme) => ({
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  raleigh: {
    backgroundImage: `url(${raleigh})`,
    backgroundColor: "#233d49",
    backgroundPosition: "center",
    width: "100%",
    height: "400px",
  },
  grid: {
    height: "400px",
    marginTop: theme.spacing(4),
  },
});

const Contact = (props) => {
  const { classes } = props;
  return (
    <Container className={classes.container}>
      <Typography variant="h1" component="h4" gutterBottom>
        Contact
      </Typography>

      <Grid container spacing={2} className={classes.grid}>
        <Grid item xs={12} sm={6}>
          <Box className={classes.raleigh}></Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Contact);
