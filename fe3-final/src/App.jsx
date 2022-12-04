import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./Routes/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import NotFound from "./Routes/NotFound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.dentist} element={<Detail />} />
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.fav} element={<Favs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
