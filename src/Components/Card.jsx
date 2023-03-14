import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";


const CardOdontologo = ({ name, username, id }) => {

  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage

    console.log("hola desde boton")

    let odontologoData = {
      id: id,
      name: name,
      username: username,
    };

    if(localStorage.getItem('favorites') == null ){
      localStorage.setItem('favorites', '[]');
    }
   
    let data =  JSON.parse(localStorage.getItem('favorites'))
    data.push(odontologoData)

    localStorage.setItem('favorites', JSON.stringify(data))

  };

  return (
    <div className="card">
      {/* En cada card deberan mostrar en name - username y el id */}

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}

      <Card sx={{ width: "100%", height: "100%" }}>
        <Link to={`/dentist/${id}`} key={id}>
          <CardMedia
            component="img"
            height="194"
            image="/images/doctor.jpg"
            alt="img doctor"
          >
          </CardMedia>
          <CardHeader
            title={name}
            subheader={username}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        </Link>
        <CardActions
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={ addFav }
            type="button"
            variant="contained"
            color="primary"
          >
            Add fav
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardOdontologo;
