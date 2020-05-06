import React from "react";
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import Banner from "../components/Banner";
import { Container, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import Gemstone from "../../img/portfolio-gemstone.jpg";
import GemstonePhone from "../../img/phoneGemstone.png";
import A9Foods from "../../img/portfolio-a9foods.jpg";
import A9home from "../../img/portfolio-a9home.jpg";
import therapyDesigns from "../../img/portfolio-therapydesigns.jpg";
import tdPhone from "../../img/tdPhone.png";

const styles = (theme) => ({
  root: {
    marginBottom: theme.spacing(10),
  },
  title: {
    marginBottom: theme.spacing(10),
  },
});

const items = [
  {
    Name: "Gemstonespeech.com",
    Caption: "Speech Language Therapy",
    contentPosition: "left",
    Items: [
      {
        Name: "Mobile",
        Image: GemstonePhone,
      },
      {
        Name: "Desktop",
        Image: Gemstone,
      },
    ],
  },
  {
    Name: "Therapydesigns.net",
    Caption: "Therapy company built with Wordpress",
    contentPosition: "middle",
    Items: [
      {
        Name: "Desktop",
        Image: therapyDesigns,
      },
      {
        Name: "Mobile",
        Image: tdPhone,
      },
    ],
  },
  {
    Name: "A9Foods.com",
    Caption: "Food Consulting Firm",
    contentPosition: "right",
    Items: [
      {
        Name: "Blending Tool",
        Image: A9Foods,
      },
      {
        Name: "Home",
        Image: A9home,
      },
    ],
  },
];

class CarouselWork extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: false,
      timer: 600,
      animation: "slide",
      indicators: true,
      timeout: 600,
    };

    autoBind(this);
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} component="section">
        <div style={{ marginTop: "50px", color: "#494949" }}>
          <Typography
            variant="h4"
            marked="center"
            align="center"
            component="h4"
            className={classes.title}
          >
            Some of our recent work
          </Typography>
          <Carousel
            className="Example"
            autoPlay={this.state.autoPlay}
            timer={this.state.timer}
            animation={this.state.animation}
            indicators={this.state.indicators}
            timeout={this.state.timeout}
          >
            {items.map((item, index) => {
              return (
                <Banner
                  item={item}
                  key={index}
                  contentPosition={item.contentPosition}
                />
              );
            })}
          </Carousel>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(CarouselWork);
