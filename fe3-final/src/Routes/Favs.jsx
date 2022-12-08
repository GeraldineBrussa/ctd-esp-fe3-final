import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { providerValue } = useContextGlobal();
  const { stateFav, dispatchFav } = providerValue;

  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs"));
    setFav(data);
  }, [stateFav]);
  const handleDeleteAll = (e) => {
    e.preventDefault();
    dispatchFav({
      type: "REMOVE_ALL_FAV",
    });
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <button onClick={handleDeleteAll}>Delete all Favourites Dentist</button>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {stateFav.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            username={item.username}
          ></Card>
        ))}
      </div>
    </>
  );
};

export default Favs;
