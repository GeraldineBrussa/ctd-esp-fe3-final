import { TYPES } from "../actions/FavAction";
export function reducerFav(state, action) {
  switch (action.type) {
    case TYPES.ADD_FAV: {
      return [...state, action.payload];
    }
    case TYPES.REMOVE_FAV: {
      return state.filter((i) => i.id !== action.payload);
    }
    case TYPES.REMOVE_ALL_fAV: {
      return [];
    }
    default: {
      throw new Error();
    }
  }
}
