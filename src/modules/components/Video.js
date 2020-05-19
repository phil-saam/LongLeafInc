import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Link as MuiLink } from "@material-ui/core";
import demoStore from "../../img/demoStore.mp4";

const styles = (theme) => ({
  root: {
    borderWidth: 2,
    color: theme.palette.secondary.main,
  },

  video: {
    right: 0,
    bottom: 0,
    maxWidth: "100%",
    height: "auto",
  },

  content: {
    bottom: 0,
    background: "rgba(0, 0, 0, 0.5)",
    color: "#f1f1f1",
    width: "100%",
    padding: 20,
  },

  cardContent: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },

  btnVisit: {
    backgroundColor: "white",
  },
});
const demoUrl = "https://store.longleafdesigns.com";
const Video = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          autoplay="autoplay"
          component="video"
          muted
          loop
          alt="demo e-commerce store"
          height="100%"
          image={demoStore}
          title="Long Leaf Designs Demo e-Store"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5">
            Demo E-Commerce Site
          </Typography>
          <Typography variant="p">
            Checkout out our demo e-commerce site that is build with React and
            Shopify!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardContent}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Button
            variant="contained"
            component={MuiLink}
            href={demoUrl}
            className={classes.btnVisit}
            style={{ textDecoration: "none" }}
          >
            Visit Store
          </Button>
          <Button
            component={Link}
            to="/contact"
            variant="contained"
            color="secondary"
          >
            Contact Us To Get Started Building your Store
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};
//     <div>
//       <video
//         autoplay="autoplay"
//         muted
//         loop
//         className={classes.video}
//         id="demoVideo"
//       >
//         <source src={demoStore} type="video/mp4" />
//       </video>

//       <div className={classes.content}>
//         <h1>Demo Store</h1>
//         <p>Check out our React/Shopify demo store</p>

//         <button id="myBtn" onclick="myFunction()">
//           Demo Store
//         </button>
//       </div>
//     </div>
//   );
// };

export default withStyles(styles)(Video);
