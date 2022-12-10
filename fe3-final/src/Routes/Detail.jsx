import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useContextGlobal } from "../Components/utils/global.context";

const Detail = () => {
  const { providerValue } = useContextGlobal();
  const { loading, setLoading } = providerValue;
  const { id } = useParams();
  const [dentist, setDentist] = useState([]);
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  useEffect(() => {
    axios(url).then((res) => setDentist([res.data]));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="detail">
      <h1>Detail Dentist {id} </h1>
      {loading ? (
        <div id="preloader5"></div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {dentist.map((dent) => (
              <tr key={dent.id}>
                <td>{dent.name}</td>
                <td>{dent.email}</td>
                <td>{dent.phone}</td>
                <td>{dent.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Detail;
