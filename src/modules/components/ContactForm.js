import React, { Component } from "react";
import { Grid, TextField, Link, Box, Button } from "@material-ui/core";

import Typography from "./Typography";

// import axios from "axios";

const url =
  "https://plre8uulpk.execute-api.us-east-1.amazonaws.com/prod/email/send";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.post = this.post.bind(this);

    this.state = {
      form: {
        fname: "",
        lname: "",
        company: "blank",
        email: "",
        content: "",
      },
      hasErrors: true,
      errorText: "Test",
      sent: false,
      inputs: [
        {
          label: "First Name",
          id: "fname",
          fullWidth: true,
          variant: null,
          sm: 6,
          required: true,
          error: false,
        },
        {
          label: "Last Name",
          id: "lname",
          fullWidth: true,
          variant: null,
          sm: 6,
          required: true,
          error: false,
        },
        {
          label: "Company",
          id: "company",
          fullWidth: true,
          variant: null,
          sm: 6,
          required: false,
          error: false,
        },
        {
          label: "Email",
          id: "email",
          fullWidth: true,
          variant: null,
          sm: 6,
          validate: true,
          required: true,
          error: false,
          errorText: null,
        },
      ],
    };
  }

  post = (url, body, callback) => {
    var req = new XMLHttpRequest();
    req.open("POST", url, true);
    req.withCredentials = false;
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load", () => {
      if (req.status < 400) {
        callback(null, JSON.parse(req.responseText));
      } else {
        callback(new Error("Request failed: " + req.statusText));
      }
    });
    req.send(JSON.stringify(body));
  };

  //cant set state for 'sent'
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form, this.state.sent);
    this.post(url, this.state.form, (err, res) => {
      if (err) {
        return alert(err);
      }

      return this.setState({ sent: true });
    });
  };

  validateEmail = (e) => {};

  handleChange = (e) => {
    if (e.target.id === "fname") {
      let form = { ...this.state.form };
      form.fname = e.target.value;
      this.setState({ form });
    } else if (e.target.id === "lname") {
      let form = { ...this.state.form };
      form.lname = e.target.value;
      this.setState({ form });
    } else if (e.target.id === "company") {
      let form = { ...this.state.form };
      form.company = e.target.value;
      if (e.target.value === "") {
        form.company = "blank";
      }
      this.setState({ form });
    } else if (e.target.id === "email") {
      let form = { ...this.state.form };
      let inputs = this.state.inputs.map((a) => ({ ...a }));
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)
      ) {
        inputs[3].error = false;
        form.email = e.target.value;
        this.setState({ hasErrors: false, inputs, form });
      } else {
        form.hasErrors = true;
        inputs[3].error = true;
        console.log(inputs, this.state.inputs, "state");

        this.setState({ form, inputs, hasErrors: true });
      }
    } else if (e.target.id === "content") {
      let form = { ...this.state.form };
      form.content = e.target.value;
      this.setState({ form });
    }
  };

  render() {
    const margin = "dense";
    let formRender = null;
    if (this.state.sent) {
      formRender = (
        <h1>Thank you for contacting us we will be in touch shortly.</h1>
      );
    } else {
      formRender = (
        <form onSubmit={this.handleSubmit} autoComplete="off" id="contactForm">
          <Grid container spacing={2}>
            {this.state.inputs.map((input) => (
              <Grid item xs={12} sm={input.sm} key={input.id}>
                <TextField
                  id={input.id}
                  label={input.label}
                  margin={margin}
                  fullWidth={input.fullWidth}
                  error={input.error}
                  required={input.required}
                  helperText={""}
                  onChange={this.handleChange}
                />
              </Grid>
            ))}

            <Grid item xs={12} sm={12}>
              <TextField
                inputProps={{ pattern: "[a-z]" }}
                id="content"
                label="Send us a Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                onChange={this.handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              Required*
            </Grid>
            <Grid item>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                id="submit"
                disabled={this.state.hasErrors}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      );
    }
    return (
      <React.Fragment>
        <Grid container spacing={2}>
          <Box p={1}>
            <Typography variant="h6">Email Us:</Typography>
            <Link href="mailto:phil@longleafdesigns.com" target="_top">
              <Typography variant="h6" color="secondary">
                Phil@longleafdesigns.com
              </Typography>
            </Link>
          </Box>
        </Grid>
        {formRender}
      </React.Fragment>
    );
  }
}

export default ContactForm;
