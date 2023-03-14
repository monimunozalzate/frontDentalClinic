import React from "react";
import Card from "../Components/Card";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ContextGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [odontologos, setOdontologos] = useState([]);

  const [dispatchLike, setDispatchLike] = useState(false);

  const { state } = useContext(ContextGlobal);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setOdontologos(res.data))
      .catch((err) => console.log(err));

    setDispatchLike(false);
  }, [dispatchLike]);

  return (
    <main className="card-grid" style={{ backgroundColor: `${state.bgColor}`, padding:"3rem" }}>
      {
        /* Aqui deberias renderizar las cards */

        odontologos.map((odontologo) => {
          return (
            <Card
              key={odontologo.id}
              name={odontologo.name}
              username={odontologo.username}
              id={odontologo.id}
            />
          );
        })
      }
    </main>
  );
};

export default Home;
