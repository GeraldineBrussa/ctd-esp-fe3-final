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
      <h2>DH Odonto</h2>
      <div>
        <Link to={routes.home}>Home</Link>
        <Link to={routes.contact}>Contact</Link>
        <Link to={routes.fav}>Favorites</Link>
        {stateTheme.theme === "" ? (
          <button className="themeBtnLight" onClick={handleChangeTheme}>
            🌙
          </button>
        ) : (
          <button className="themeBtnDark" onClick={handleChangeTheme}>
            🌞
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
