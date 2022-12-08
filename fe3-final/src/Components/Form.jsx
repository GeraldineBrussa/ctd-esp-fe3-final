import React from "react";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  const [message, setMessage] = useState({
    errorMessage: "",
    succesMessage: "",
    numberMessage: null,
  });

  const messages = {
    0: "",
    1: "Name is empty",
    2: "Name doesn't accept characters",
    3: "Name needs at least 4 letters",
    4: "Email is empty",
    5: "Email is invalid",
    6: "We received your information and we're going to contact you",
  };

  //Regex
  const emailRegex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  const fullNameRegex =
    /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;

  //validaciones
  const onSubmit = (e) => {
    e.preventDefault();

    //fullName validations
    if (user.fullName.length <= 0) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[1] }));
    }
    //incluye ñ y tildes
    else if (!user.fullName.match(fullNameRegex)) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[2] }));
    } else if (user.fullName.length <= 3) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[3] }));
    }
    //email validations
    else if (user.email.length <= 0) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[4] }));
    } else if (!user.email.match(emailRegex)) {
      return setMessage((prev) => ({ ...prev, errorMessage: messages[5] }));
    } else {
      //succes message
      setMessage((prev) => ({ ...prev, succesMessage: messages[6] }));
      //clear error message and inputs
      setMessage((prev) => ({ ...prev, errorMessage: messages[0] }));
      setUser((prev) => ({ ...prev, fullName: messages[0] }));
      setUser((prev) => ({ ...prev, email: messages[0] }));
    }
  };

  return (
    <>
      <fieldset>
        <legend>Please fill out the form below</legend>
        <form action="/registro" onSubmit={onSubmit}>
          <input
            value={[user.fullName]}
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={(e) => setUser({ ...user, fullName: e.target.value })}
          />
          <input
            value={[user.email]}
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">Send</button>
        </form>
      </fieldset>
      <p className="error">{message.errorMessage}</p>
      <p className="success">{message.succesMessage}</p>
    </>
  );
};

export default Form;
