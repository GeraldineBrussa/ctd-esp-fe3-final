import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { routes } from "../Routes/routes";
import { useContextGlobal } from "../Components/utils/GlobalContext";

const Card = ({ name, username, id }) => {
  const { providerValue } = useContextGlobal();
  const { state, dispatch } = providerValue;
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state));
  }, [state]);

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({
      type: "ADD_FAV",
      payload: { name, username, id },
    });
    alert("The selected dentist has been added to favorites!");
  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}
      <Outlet />
      <Link key={id} to={`/dentist/${id}`}>
        <img src="/images/doctor.jpg" alt="dentist" />
        <h3>{name}</h3>
        <h4>{username}</h4>
      </Link>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">
        ⭐
      </button>
    </div>
  );
};

export default Card;
