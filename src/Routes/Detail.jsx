import React from "react";
import { useParams } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  let { id } = useParams();
  console.log({ id });

  const [detail, setDetail] = useState([]);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setDetail(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <h1 style={{display:"flex", flexDirection:"column" , justifyContent:"center", alignItems:"center"}}>Detail Dentist 
      <Avatar sx={{ bgcolor: "#8561c5" }}
            >{id}</Avatar>
      </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

      <Table sx={{ width: "100%", padding: "4rem"}}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Website</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            key={detail.id}
          >
            <TableCell component="th" scope="row">
              {detail.id}
            </TableCell>
            <TableCell align="right">{detail.name}</TableCell>
            <TableCell align="right">{detail.email}</TableCell>
            <TableCell align="right">{detail.phone}</TableCell>
            <TableCell align="right">{detail.website}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default Detail;
