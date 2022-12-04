import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import axios from "axios";
import { reducerFav } from "./reducer";

//const initialState = { theme: "", data: [] };
const initFav = { favs: [] };
/*
export const themes = {
  light: {
    font: "black",
    background: "white",
  },
  dark: {
    font: "white",
    background: "black",
  },
};
*/
export const ContextGlobal = createContext();
const GlobalContex = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentist, setDentist] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => setDentist(res.data));
  }, []);

  const [state, dispatch] = useReducer(reducerFav, initFav);

  const providerValue = useMemo(
    () => ({ dentist, setDentist, state, dispatch }),
    [dentist, setDentist, state, dispatch]
  );

  return (
    <ContextGlobal.Provider value={{ providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default GlobalContex;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
