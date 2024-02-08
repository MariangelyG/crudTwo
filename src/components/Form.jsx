import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

//recibe como prp handleAddUser, la función para agregar un nuevo usuario
export const Form = ({ onSubmit, titleButton, initialValue, id, titleButtontwo}) => {
  //cambiar de ruta despues de agregar el usuario
  const navigate = useNavigate();

  //Inicializar los datos del usuario con cadenas vacias
  const [user, setUser] = useState({
    name: initialValue.name || "",
    username: initialValue.username || "",
    email: initialValue.email || "",
    phone: initialValue.phone || "",
    website: initialValue.website || "",
  });

  //Función que se ejecuta cuando cambia el valor
  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({
      //Actualiza el estado: obtener una copia del usuario y le asigna el value al name
      ...user,
      [name]: value,
    });
  };
  //Función para agregar un nuevo usuario utilizando la función handleAddUser
  //que recibió como prop y redirigirse a la ruta indicada.
  const handleSubmit = () => {
    onSubmit(user, id);
    navigate("/");
  };

  const handleNavigate =()=>{
    navigate("/")
}

  return (
    // Contenedor
<Box sx={{height:"100vh", width: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}>

    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems:"center",
        height:"550px",
        backgroundColor: "white",
        // maxWidth:"100vw",
        gap: "12px",
        // padding: 5,
        pr: 2,
        pl: 2,
        pb: 2,
        width:"36%",
        margin: "auto",
        // maxWidth: "400px",
       
      }}
    >
      <Button
        sx={{ display: "flex", justifyContent:"start", color: "red" }}
        onClick={() => handleNavigate()}
      >
        <ArrowBackIcon />
      </Button>
        <Typography variant="h4" sx={{display:"flex", justifyContent:"center"}}><b>{titleButtontwo}</b></Typography>

      {/* Campos del formulario */}

      <TextField
        color="divider"
        sx={{ bgcolor: "white" }}
        onChange={handleChange}
        name="name"
        type="text"
        value={user.name}
        label="Enter your Name"
        variant="filled"
      />

      <TextField
        color="divider"
        sx={{ bgcolor: "white" }}
        onChange={handleChange}
        name="username"
        label="Enter your UserName"
        type="text"
        value={user.username}
        variant="filled"
      />

      <TextField
        color="divider"
        sx={{ bgcolor: "white" }}
        onChange={handleChange}
        name="email"
        label="Enter your Email"
        type="text"
        value={user.email}
        variant="filled"
      />

      <TextField
        color="divider"
        sx={{ bgcolor: "white" }}
        onChange={handleChange}
        name="phone"
        label="Enter your Phone"
        type="text"
        value={user.phone}
        variant="filled"
      />

      <TextField
        color="divider"
        sx={{ bgcolor: "white" }}
        onChange={handleChange}
        name="website"
        label="Enter your Website"
        type="text"
        value={user.website}
        variant="filled"
      />

      <Button
        color="success"
        onClick={handleSubmit}
        variant="contained"
        sx={{ mt: 1 }}
      >
        {titleButton}
      </Button>
    </Box>

</Box>
  );
};

// backgroundColor: "#02808F", ":hover":{bgcolor: "#02808F"},
