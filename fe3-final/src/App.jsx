import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Routes/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import NotFound from "./Routes/NotFound";
import { Routes, Route } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";
import ScrollButon from "./Components/ScrollButton";

function App() {
  const { providerValue } = useContextGlobal();
  const { stateTheme } = providerValue;
  return (
    <div className={stateTheme.theme}>
      <Navbar />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.fav} element={<Favs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollButon />
      <Footer />
    </div>
  );
}

export default App;
