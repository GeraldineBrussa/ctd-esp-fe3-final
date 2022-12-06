import React from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { providerValue } = useContextGlobal();
  const { dentists, stateTheme } = providerValue;
  //className={stateTheme.theme}
  return (
    <>
      <main>
        <h1>Home</h1>
        <div className="card-grid">
          {/* Aqui deberias renderizar las cards */}
          {dentists.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              name={item.name}
              username={item.username}
            ></Card>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
