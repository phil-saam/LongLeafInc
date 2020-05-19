import React, { Component } from "react";
import { Grid, TextField, Link, Box, Button } from "@material-ui/core";

import Typography from "./Typography";

// import axios from "axios";

const url =
  "https://plre8uulpk.execute-api.us-east-1.amazonaws.com/dev/email/send";

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.post = this.post.bind(this);

    this.state = {
      form: {
        fname: "blank",
        lname: "blank",
        company: "blank",
        email: "blank",
        content: "blank",
      },
      hasErrors: { fname: true, lname: true, email: true },
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
          errorText: " ",
        },
        {
          label: "Last Name",
          id: "lname",
          fullWidth: true,
          variant: null,
          sm: 6,
          required: true,
          error: false,
          errorText: " ",
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
          errorText: " ",
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
    this.setState({ sent: true });
    console.log(this.state.form, this.state.sent);
    this.post(url, this.state.form, (err, res) => {
      if (err) {
        return alert(err);
      }

      return this.setState({ sent: true });
    });
  };

  validateEmail = (email, hasErrors) => {
    let inputs = this.state.inputs;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      inputs[3].error = false;
      inputs[3].errorText = " ";
      hasErrors = false;
      this.setState({ inputs });
      return hasErrors;
    } else {
      hasErrors = true;
      inputs[3].error = true;
      inputs[3].errorText = "Please enter a valid email";
      this.setState({ inputs });
    }
    return hasErrors;
  };

  validateText = (text, i, hasErrors) => {
    let inputs = this.state.inputs.map((a) => ({ ...a }));
    if (/^[A-Za-z]+$/.test(text) && text.length > 0) {
      inputs[i].error = false;
      inputs[i].errorText = " ";
      hasErrors = false;
      this.setState({ inputs });
      return hasErrors;
    } else {
      inputs[i].error = true;
      inputs[i].errorText = `Please enter a valid name`;
      hasErrors = true;
      this.setState({ inputs });
      return hasErrors;
    }
  };

  handleChange = (e) => {
    let hasErrors = { ...this.state.hasErrors };
    let form = { ...this.state.form };
    if (e.target.id === "fname") {
      form.fname = e.target.value;
      hasErrors.fname = this.validateText(e.target.value, 0, hasErrors);
    } else if (e.target.id === "lname") {
      form.lname = e.target.value;
      hasErrors.lname = this.validateText(e.target.value, 1, hasErrors);
    } else if (e.target.id === "company") {
      form.company = e.target.value;
      if (e.target.value === "") {
        form.company = "blank";
      }
    } else if (e.target.id === "email") {
      form.email = e.target.value;
      hasErrors.email = this.validateEmail(e.target.value, hasErrors);
    } else if (e.target.id === "content") {
      form.content = e.target.value;
      if (e.target.value === "") {
        form.content = "blank";
      }
    }
    this.setState({ form, hasErrors });
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
                  errorStyle={{
                    position: "absolute",
                  }}
                  id={input.id}
                  label={input.label}
                  margin={margin}
                  fullWidth={input.fullWidth}
                  error={input.error}
                  required={input.required}
                  helperText={input.errorText}
                  onChange={this.handleChange}
                />
              </Grid>
            ))}

            <Grid item xs={12} sm={12}>
              <TextField
                inputProps={{ pattern: "[a-z]" }}
                id="content"
                label="Send us a message..."
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
                //checks if all errors are false
                disabled={
                  !Object.keys(this.state.hasErrors).every(
                    (k) => !this.state.hasErrors[k]
                  )
                }
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
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Typography variant="h6">Email Us:</Typography>
              <Link href="mailto:phil@longleafdesigns.com" target="_top">
                <Typography variant="h6" color="secondary">
                  Phil@longleafdesigns.com
                </Typography>
              </Link>
              <Typography variant="h7">or use our contact form:</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box p={1}>
              <Typography variant="h6">Call Us:</Typography>
              <span itemprop="telephone">
                <Link href="tel:+9195260822‬">
                  <Typography variant="h6" color="secondary">
                    (919) 526-0822
                  </Typography>
                  ‬
                </Link>
              </span>
            </Box>
          </Grid>
        </Grid>
        {formRender}
      </React.Fragment>
    );
  }
}

export default ContactForm;
