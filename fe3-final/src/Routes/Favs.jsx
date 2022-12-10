import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useContextGlobal } from "../Components/utils/global.context";
import { TYPES } from "../Components/utils/actions/FavAction";

const Favs = () => {
  const { providerValue } = useContextGlobal();
  const { dispatchFav, fav, loading, setLoading } = providerValue;
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleDeleteAll = (e) => {
    e.preventDefault();
    dispatchFav({
      type: TYPES.REMOVE_ALL_fAV,
    });
  };

  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <button className="btnFav" onClick={handleDeleteAll}>
        Delete all Favourites Dentist
      </button>
      {loading ? (
        <div id="preloader5"></div>
      ) : (
        <div className="card-grid">
          {fav.map((item) => (
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
    </div>
  );
};

export default Favs;
