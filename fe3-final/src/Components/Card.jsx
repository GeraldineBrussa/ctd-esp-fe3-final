import React from "react";
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "./utils/actions/FavAction";

const Card = ({ name, username, id }) => {
  const { providerValue } = useContextGlobal();
  const { stateFav, dispatchFav } = providerValue;

  const addFav = () => {
    dispatchFav({
      type: TYPES.ADD_FAV,
      payload: { name, username, id },
    });
    alert("The selected dentist has been added to favorites!");
  };
  const removeFav = () => {
    dispatchFav({
      type: TYPES.REMOVE_FAV,
      payload: id,
    });
    alert("The selected dentist has been remove from favorites!");
  };

  return (
    <div className="card">
      <Link key={id} to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="dentist" />
        <h3>{name}</h3>
        <h4>{username}</h4>
      </Link>

      {stateFav.find((i) => i.id === id) ? (
        <button onClick={removeFav} className="favButtonAdd">
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
