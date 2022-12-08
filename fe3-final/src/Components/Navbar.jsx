import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../Routes/routes";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "./utils/actions/ThemeAction";

const Navbar = () => {
  const { providerValue } = useContextGlobal();
  const { dispatchTheme, stateTheme } = providerValue;
  const handleChangeTheme = () => {
    stateTheme.theme === (stateTheme.theme = "")
      ? dispatchTheme({ type: TYPES.THEME_DARK })
      : dispatchTheme({ type: TYPES.THEME_LIGHT });
  };

  return (
    <nav className={stateTheme.theme}>
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.fav}>Favorites</Link>

      <div>
        {stateTheme.theme === "" ? (
          <button onClick={handleChangeTheme}>🌙</button>
        ) : (
          <button onClick={handleChangeTheme}>🌞</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
