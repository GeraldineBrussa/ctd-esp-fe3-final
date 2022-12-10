import React, { useState } from "react";
import useInput from "./UseInput";

const Form = () => {
  const fullName = useInput("text");
  const email = useInput("email");

  const [message, setMessage] = useState({
    errorMessage: "",
    succesMessage: "",
    numberMessage: null,
  });

  const messages = {
    0: "",
    1: "Name is empty",
    2: "Name doesn't accept characters",
    3: "Name needs at least 5 letters",
    4: "Email is empty",
    5: "Email is invalid",
    6: "We received your information and we're going to contact you!",
  };

  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const fullNameRegex =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  const onSubmit = (e) => {
    e.preventDefault();

    if (fullName.value.length <= 0) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[1] }));
    } else if (!fullName.value.match(fullNameRegex)) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[2] }));
    } else if (fullName.value.length <= 4) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[3] }));
    } else if (email.value.length <= 0) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[4] }));
    } else if (!email.value.match(emailRegex)) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[5] }));
    } else {
      setMessage((prev) => ({ ...prev, succesMessage: messages[6] }));

      setMessage((prev) => ({ ...prev, numberMessage: 6 }));

      setMessage((prev) => ({ ...prev, errorMessage: messages[0] }));
    }
    document.getElementById("formContact").reset();
  };

  return (
    <>
      <fieldset>
        <legend>Please fill out the form below</legend>
        <form id="formContact" onSubmit={onSubmit}>
          <input {...fullName} placeholder="Full Name" />
          <input {...email} placeholder="Email" />
          <button type="onsubmit">Send</button>
        </form>
      </fieldset>
      <p className="error" style={{ color: "red" }}>
        {message.errorMessage}
      </p>
      <p className="success" style={{ color: "green" }}>
        {message.numberMessage == 6 ? "Hi " + fullName.value : ""}
        {message.succesMessage}
      </p>
    </>
  );
};

export default Form;
