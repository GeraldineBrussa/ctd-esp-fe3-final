import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useContextGlobal } from "../Components/utils/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { providerValue } = useContextGlobal();
  const { dentist } = providerValue;
  return (
    <>
      <Navbar />
      <main className="">
        <h1>Home</h1>
        <div className="card-grid">
          {/* Aqui deberias renderizar las cards */}
          {dentist.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
            ></Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
