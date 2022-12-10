import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  useReducer,
} from "react";
import axios from "axios";
import { reducerFav } from "./reducer/reducerFav";
import { reducerTheme } from "./reducer/reducerTheme";

const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext();
const ContextProvider = ({ children }) => {
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    axios(url).then((res) => setDentists(res.data));
  }, []);

  function initFav(initialValue) {
    return localStorage.getItem("favs")
      ? JSON.parse(localStorage.getItem("favs"))
      : initialValue;
  }
  const [stateFav, dispatchFav] = useReducer(
    reducerFav,
    initialState.data,
    initFav
  );
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(stateFav));
  }, [stateFav]);

  const [fav, setFav] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favs"));
    setFav(data);
  }, [stateFav]);

  const [stateTheme, dispatchTheme] = useReducer(reducerTheme, initialState);
  const [loading, setLoading] = useState(true);

  const providerValue = useMemo(
    () => ({
      dentists,
      setDentists,
      stateTheme,
      dispatchTheme,
      stateFav,
      dispatchFav,
      fav,
      setFav,
      loading,
      setLoading,
    }),
    [
      dentists,
      setDentists,
      stateTheme,
      dispatchTheme,
      stateFav,
      dispatchFav,
      fav,
      setFav,
      loading,
      setLoading,
    ]
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
