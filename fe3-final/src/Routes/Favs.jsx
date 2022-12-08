import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "../Components/utils/actions/FavAction";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { providerValue } = useContextGlobal();
  const { dispatchFav, fav } = providerValue;

  const handleDeleteAll = (e) => {
    e.preventDefault();
    dispatchFav({
      type: TYPES.REMOVE_ALL_fAV,
    });
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      <button onClick={handleDeleteAll}>Delete all Favourites Dentist</button>
      {fav.map((item) => (
        <div className="card-grid" key={item.id}>
          <Card id={item.id} name={item.name} username={item.username}></Card>
        </div>
      ))}
    </>
  );
};

export default Favs;
