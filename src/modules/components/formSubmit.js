const form = document.getElementById("contactForm"); //need to fix this
const url = `https://plre8uulpk.execute-api.us-east-1.amazonaws.com/dev/email/send`;
const toast = document.getElementById("toast");
const submit = document.getElementById("submit");

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}

function success() {
  toast.innerHTML =
    "Thanks for sending me a message! I'll get in touch with you ASAP. :)";
  submit.disabled = false;
  submit.blur();
  form.name.focus();
  form.name.value = "";
  form.email.value = "";
  form.content.value = "";
}
function error(err) {
  toast.innerHTML =
    "There was an error with sending your message, hold up until I fix it. Thanks for waiting.";
  submit.disabled = false;
  console.log(err);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  toast.innerHTML = "Sending";
  submit.disabled = true;

  const payload = {
    fname: form.fname.value,
    lname: form.lname.value,
    company: form.company.value,
    email: form.email.value,
    content: form.content.value,
  };
  post(url, payload, function (err, res) {
    if (err) {
      return error(err);
    }
    success();
  });
});
