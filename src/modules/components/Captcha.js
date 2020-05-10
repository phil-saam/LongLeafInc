import React, { useEffect } from "react";
const Captcha = () => {
  const handleLoaded = (_) => {
    window.grecaptcha.ready((_) => {
      window.grecaptcha
        .execute("_reCAPTCHA_site_key_", { action: "homepage" })
        .then((token) => {
          // ...
        });
    });
  };

  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?render=_reCAPTCHA_site_key";
    script.addEventListener("load", handleLoaded);
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="g-recaptcha"
      data-sitekey="_reCAPTCHA_site_key_"
      data-size="invisible"
    ></div>
  );
};

export default Captcha;
