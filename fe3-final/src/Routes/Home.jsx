import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";

const Home = () => {
  const { providerValue } = useContextGlobal();
  const { dentists, loading, setLoading } = providerValue;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <main>
      <h1>Home</h1>
      {loading ? (
        <div id="preloader5"></div>
      ) : (
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
      )}
    </main>
  );
};

export default Home;
