import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { routes } from "./routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />}>
        <Route path="/dentist/:id" element={<Detail />} />
      </Route>
      <Route path={routes.contact} element={<Contact />} />
      <Route path={routes.fav} element={<Favs />} />
    </Routes>
  );
}
export default App;

/* Éste div con los componenetes Navbar y Footer estaban en el documento original pero se supone que en app sólo van las rutas, avisame si te parece bien sacarlo o lo dejamos pero en teoría dejarlo no sería una buena práctica.
<div className="App">
          <Navbar/>
          <Footer/>
      </div>

      En la consigna no hay un not Found, lo podríamos poner si nos sobra el tiempo

      <Route path="*" element={<NotFound />} />
*/
