import { Grid, TextField, Button } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  let initialValues = {
    nombre: "",
    email: "",
  };

  const onSubmit = (data) => {
    console.log(data);
    alert(`Gracias ${data.nombre} te contactaremos cuando antes vía mail`);
  };

  const { handleChange, handleSubmit, values, errors } = useFormik({
    initialValues,
    onSubmit,

    validationSchema: Yup.object({
      nombre: Yup.string().required("Ingrese un nombre").min(5),
      email: Yup.string().required("Ingrese un email").email(),
    }),
  });

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        padding: "6rem",
      }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-evenly"}
        spacing={2}
        sx={{ width: "100%" }}
      >
        <Grid item xs={12} md={12}>
          <TextField
            type="text"
            label="Ingrese su nombre"
            variant="outlined"
            fullWidth
            name="nombre"
            onChange={handleChange}
            value={values.nombre}
            error={errors.nombre}
            helperText={errors.nombre}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            type="email"
            label="Ingrese su email"
            variant="outlined"
            fullWidth
            name="email"
            onChange={handleChange}
            value={values.email}
            error={errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Button type="submit" variant="contained" size="large">
          Enviar
        </Button>
      </Grid>
    </form>
  );
};

export default Form;

// error={swal({
//   text: "Por favor verifique su información nuevamente",
//   icon: "error",
// })}
