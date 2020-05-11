import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
} from "@material-ui/core";

const fontHeader = "25px";
const styles = (theme) => ({
  Banner: {
    height: "400px",
    position: "relative",
  },
  BannerGrid: {
    height: "400px",
  },
  Media: {
    backgroundColor: "white",
    height: "100%",
    overflow: "hidden",
    backgroundPosition: "top",
    position: "relative",
    transition: "300ms",
    // "&:hover": {
    //   filter: "brightness(115%)",
    //   borderColor: theme.palette.secondary.main,
    //   border: "2px",
    // },
  },
  MediaCaption: {
    textOverflow: "ellipsis",
    position: "absolute",
    bottom: 0,
    paddingLeft: 15,
    backgroundColor: theme.palette.primary.dark,
    color: "white",
    opacity: 0.6,
    width: "100%",
    height: "10%",
    fontSize: fontHeader,
    transition: "300ms",
    // cursor: "pointer",
    // "&:hover": {
    //   opacity: 0.8,
    // },
  },

  Content: {
    color: "white",
    backgroundColor: theme.palette.primary.main,
    height: "100%",
    // cursor: "pointer",
    padding: "30px",
    // transition: "300ms",
    // "&:hover": {
    //   filter: "brightness(80%)",
    // },
  },

  Title: {
    marginTop: 40,
    marginBottom: 20,
    color: theme.palette.secondary.light,
    fontSize: fontHeader,
    textTransform: "uppercase",
  },
});

function Banner(props) {
  const { classes } = props;

  if (props.newProp) console.log(props.newProp);
  const contentPosition = props.contentPosition
    ? props.contentPosition
    : "left";
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid
      component={Box}
      item
      sm={12 / totalItems}
      key="content"
      display={{ xs: "none", sm: "block" }}
    >
      <CardContent className={classes.Content}>
        <Typography variant="h6" className={classes.Title}>
          {props.item.Name}
        </Typography>

        <Typography className={classes.Caption}>
          {props.item.Caption}
        </Typography>
      </CardContent>
    </Grid>
  );

  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid
        item
        xs={12 / (totalItems - 1)}
        sm={12 / totalItems}
        key={item.Name}
      >
        <CardMedia
          className={classes.Media}
          image={item.Image}
          title={item.Name}
        >
          <Typography className={classes.MediaCaption}>{item.Name}</Typography>
        </CardMedia>
      </Grid>
    );

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={classes.Banner}>
      <Grid container spacing={0} className={classes.BannerGrid}>
        {items}
      </Grid>
    </Card>
  );
}
export default withStyles(styles)(Banner);
