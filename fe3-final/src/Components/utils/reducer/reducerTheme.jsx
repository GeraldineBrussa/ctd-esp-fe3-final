import { TYPES } from "../actions/ThemeAction";
export const reducerTheme = (state, action) => {
  switch (action.type) {
    case TYPES.THEME_LIGHT:
      return {
        theme: (state.theme = ""),
      };
    case TYPES.THEME_DARK:
      return {
        theme: (state.theme = "dark"),
      };
    default: {
      throw new Error();
    }
  }
};
