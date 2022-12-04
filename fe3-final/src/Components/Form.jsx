import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [input, setInput] = useState({
    fullName: "",
    email: "",
  });
  const handleInput = (e) => {
    e.preventDefault();
    //Faltan las validaciones con los mensajes
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    //Falta que luego se agregue el mensaje de gracias, te contactaremos lo antes posible
  };

  return (
    <>
      <fieldset>
        <legend>Please fill out the form below</legend>
        <form onSubmit={onSubmit}>
          <input
            value={[input.fullName]}
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleInput}
          />
          <input
            value={[input.email]}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInput}
          />
          <button>Send</button>
        </form>
      </fieldset>
    </>
  );
};

export default Form;
