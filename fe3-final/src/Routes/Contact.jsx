import React from "react";
import Form from "../Components/Form";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
