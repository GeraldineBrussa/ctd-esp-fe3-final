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

export function reducerFav(state, action) {
  switch (action.type) {
    case "ADD_FAV": {
      return [...state, action.payload];
    }
    case "REMOVE_FAV": {
      return state.filter((i) => i.id !== action.payload);
    }
    case "ELIMINAR PRIMERO": {
      return state.shift();
    }
    case "ELIMINAR ULTIMO": {
      return state.pop();
    }
    case "REMOVE_ALL_FAV": {
      return [];
    }
    default: {
      throw new Error(`No se reconoce el type`);
    }
  }
}
/*
//opcional: normalizamos los tipos de acciones 
const actionTypes = {
  REMOVE_ALL_fAV: '"REMOVE_ALL_FAV"',
}
*/
