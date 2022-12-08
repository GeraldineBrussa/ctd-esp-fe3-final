import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";

const Card = ({ name, username, id }) => {
  const { providerValue } = useContextGlobal();
  const { stateFav, dispatchFav } = providerValue;

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatchFav({
      type: "ADD_FAV",
      payload: { name, username, id },
    });
    alert("The selected dentist has been added to favorites!");
  };
  const removeFav = () => {
    dispatchFav({
      type: "REMOVE_FAV",
      payload: id,
    });
    alert("The selected dentist has been remove from favorites!");
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Link key={id} to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="dentist" />
        <h3>{name}</h3>
        <h4>{username}</h4>
      </Link>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      {stateFav.find((i) => i.id === id) ? (
        <button onClick={removeFav} className="favButton">
          🌟
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          ⭐
        </button>
      )}
    </div>
  );
};

export default Card;
