import React, { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  //const { id } = useParams();
  const params = useParams();
  const idDentist = params.id;
  const [dentist, setDentist] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${idDentist}`;
  useEffect(() => {
    axios(url).then((res) => setDentist([res.data]));
  }, []);
  return (
    <>
      <Navbar />
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {dentist.map((dent) => (
            <tr key={dent.id}>
              <td>{dent.name}</td>
              <td>{dent.email}</td>
              <td>{dent.phone}</td>
              <td>{dent.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Footer />
    </>
  );
};

export default Detail;
