import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import axios from "axios";
import { reducerFav, reducerTheme } from "./reducer";

const initialState = { theme: "", data: [] };
export const ContextGlobal = createContext();
const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => setDentists(res.data));
  }, []);

  const [stateFav, dispatchFav] = useReducer(reducerFav, initialState);
  const [stateTheme, dispatchTheme] = useReducer(reducerTheme, initialState);

  const providerValue = useMemo(
    () => ({
      dentists,
      setDentists,
      stateFav,
      dispatchFav,
      stateTheme,
      dispatchTheme,
    }),
    [dentists, setDentists, stateFav, dispatchFav, stateTheme, dispatchTheme]
  );

  return (
    <ContextGlobal.Provider value={{ providerValue }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
