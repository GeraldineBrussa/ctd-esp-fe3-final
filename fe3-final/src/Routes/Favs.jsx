import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [fav, setFav] = useState({ favs: [] });
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs"));
    setFav(favs);
  }, []);
  return (
    <>
      <Navbar />
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {fav.favs.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            username={item.username}
          ></Card>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Favs;
