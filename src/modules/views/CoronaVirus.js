import React from "react";
import { Link } from "react-router-dom";
//MUI
import SnackbarContent from "@material-ui/core/SnackbarContent";
import Snackbar from "@material-ui/core/Snackbar";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Hidden,
  Button,
  Divider,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const styles = (theme) => ({
  Snackbar: { marginBottom: "2S0px" },
  Content: {
    backgroundColor: "white",
    maxWidth: "300px",
    color: theme.palette.primary.dark,
  },
  Header: { fontSize: 22, marginBottom: theme.spacing(3) },
  Divider: { marginBottom: theme.spacing(3) },
});

const CoronaVirus = (props) => {
  const { classes } = props;
  return (
    <Hidden xsDown>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        key="1"
        open={props.open}
        onClose={props.handleClose}
        className={classes.Snackbar}
      >
        <SnackbarContent
          className={classes.Content}
          message={
            <Grid container>
              <Grid item>
                <Typography className={classes.Header}>
                  Corona Virus and E-commerce
                </Typography>
                <Divider className={classes.Divider} />
                <Typography color="inherit" className={classes.Divider}>
                  Due to Corona Virus, businesses need e-commerce. We can have
                  your store up and running!
                </Typography>
                <Divider />
              </Grid>
            </Grid>
          }
          action={[
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to="/contact"
            >
              get started with Long Leaf
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={props.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </Snackbar>
    </Hidden>
  );
};

export default withStyles(styles)(CoronaVirus);
