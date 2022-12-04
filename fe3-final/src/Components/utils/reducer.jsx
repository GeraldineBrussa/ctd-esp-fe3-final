export const reducerTheme = (stateTheme, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      const newThemeKey =
        stateTheme.currentTheme.id === "dark" ? "light" : "dark";
      return { ...stateTheme, currentTheme: theme[newThemeKey] };
    default:
      throw new Error();
  }
};

export const reducerFav = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        favs: [...state.favs, action.payload],
      };
    // Después le ponemos más casos para tener más nota
    default:
      throw new Error();
  }
};
