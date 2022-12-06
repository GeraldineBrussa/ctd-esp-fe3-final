export const reducerTheme = (state, action) => {
  switch (action.type) {
    case "THEME_LiGHT":
      return {
        theme: (state.theme = ""),
      };
    case "THEME_DARK":
      return {
        theme: (state.theme = "dark"),
      };
    default:
      throw new Error();
  }
};

export const reducerFav = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        data: [...state.data, action.payload],
      };
    case "REMOVE_ALL_FAV":
      return {
        data: [],
      };
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.name !== action.item.name);
    // Después le ponemos más casos para tener más nota éste todavía no está
    default:
      throw new Error();
  }
};
