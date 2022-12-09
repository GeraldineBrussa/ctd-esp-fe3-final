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
          {dentists.map((item) => (
            <React.Fragment key={item.id}>
              <Card
                id={item.id}
                name={item.name}
                username={item.username}
              ></Card>
            </React.Fragment>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
