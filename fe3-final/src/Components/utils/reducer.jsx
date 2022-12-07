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
/*
export const reducerFavMejorado = (state, action) => {
  switch (action.type) {
    case "ADD_FAV":
      return {
        data: [newStates, action.payload],
      };
    case "REMOVE_ALL_FAV":
      return {
        data: [],
      };
    case "REMOVE_FROM_CART":
      return {
        data: [newStates.filter((item) => item.name !== action.item.name)],
      };
    // Después le ponemos más casos para tener más nota éste todavía no está implementado
    default: {
      throw new Error();
    }
  }
}; 
*/

export function reducerFavMejorado(state, action) {
  switch (action.type) {
    case "ADD_FAV": {
      return [...state, action.payload];
    }
    case "REMOVE_FAV": {
      return state.filter((i) => i.id !== action.payload);
    }
    case "REMOVE_ALL_FAV": {
      localStorage.removeItem("favs");
      return [];
    }
    default: {
      throw new Error(`No se reconoce el type`);
    }
  }
} /*

/*

/*
//opcional: normalizamos los tipos de acciones
const actionTypes = {
  addAlInicio: 'addAlInicio',
  addAlFinal: 'addAlFinal',
  eliminarPrimero: 'eliminarPrimero',
  eliminarUltimo: 'eliminarUltimo',
  reset: 'reset',
}

//operacion que calcula el valor inicial
//recibe el segundo param del useReducer
function init(initialValue) {
  return localStorage.getItem('bag')
    ? JSON.parse(localStorage.getItem('bag'))
    : initialValue
}

/**
 * @param state el estado antes del setState
 * @param action un objetito con las key type y payload
 */ /*
 function bagReducer(state, action) {
  //logica comun para todos los casos
  let newState = [...state]
  //evaluamos el tipo de accion que se esta ejecutando
  switch (action.type) {
    case actionTypes.addAlInicio: {
      const newElement = {
        id: getUniqueKey(),
        value: action.payload,
      }
      newState.unshift(newElement)
      break
    }
    case actionTypes.addAlFinal: {
      const newElement = {
        id: getUniqueKey(),
        value: action.payload,
      }
      newState.push(newElement)
      break
    }
    case actionTypes.eliminarPrimero: {
      newState.shift()
      break
    }
    case actionTypes.eliminarUltimo: {
      newState.pop()
      break
    }
    case actionTypes.reset: {
      newState = []
      break
    }
    default: {
      throw new Error(`No se reconoce el type: ${action.type}`)
    }
  }
  //logica comun para todos los casos
  localStorage.setItem('bag', JSON.stringify(newState))
  return newState
}

*/

/* La original que se puede mejorar
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
      return state.data.filter((item) => item.name !== action.item.name);
    // Después le ponemos más casos para tener más nota éste todavía no está implementado
    default:
      throw new Error();
  }
};
*/
