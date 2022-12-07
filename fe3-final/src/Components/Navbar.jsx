import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/routes";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { providerValue } = useContextGlobal();
  const { dispatchTheme, stateTheme } = providerValue;
  const handleChangeTheme = () => {
    stateTheme.theme === (stateTheme.theme = "")
      ? dispatchTheme({ type: "THEME_DARK" })
      : dispatchTheme({ type: "THEME_LiGHT" });
  };

  return (
    <nav className={stateTheme.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.fav}>Favorites</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      {stateTheme.theme === "" ? (
        <button onClick={dispatchTheme({ type: "THEME_DARK" })}>🌙</button>
      ) : (
        <button onClick={dispatchTheme({ type: "THEME_LiGHT" })}>☀🌞</button>
      )}
    </nav>
  );
};

export default Navbar;
