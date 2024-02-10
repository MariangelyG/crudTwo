import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ViewUser = ({ userById }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };
  //   const onlyInitials = (userById) => {
  // //    console.log(users)
  //     let primeraLetra = userById.name[0] + userById.username[0];
  //     return primeraLetra;
  //   };

  return (
    <>
    {/* Contenedor principal: Morado */}
      <Box
        
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          
        }}
      >
        {/* Contenedor de la card: Gris  */}
        <Card
          sx={{
            bgcolor: "#3c3c3c",
            color: "white",
            padding: "10px",
            width: "50%",
            height: "65vh",
            boxShadow: "10px 10px 20px #111",
            borderRadius: "18px",
            textAlign: "center",
          }}
        >
          {/* Icono de flecha para ir hacia atrás */}
          <Button
            sx={{ display: "flex", color: "red" }}
            onClick={() => handleNavigate()}
          >
            <ArrowBackIcon />
          </Button>
          {/* Titulo de la Card */}
          <Typography variant="h4">
            <b>USER DETAILS: {userById.name}</b>
          </Typography>
          {/* Contenedor del circulo */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* circulo morado */}
            <Box
              sx={{
                bgcolor: "#1b003a",
                width: 50,
                height: 50,
                borderRadius: 10,
                mt: 1,
              }}
            >
              {/* Inicial de nombre y apellido */}
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mt: 1,
                  fontSize: 20,
                }}
              >
                {userById.name[0] + userById.name.split(" ")[1][0]}
              </Typography>
            </Box>
          </Box>

          <CardContent>
            {/* detalles de usuario */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <Typography sx={{ fontSize: "25px" }} variant="h6" gutterBottom>
                <b>FirstName:</b> {userById.name}
              </Typography>
              <Typography sx={{ fontSize: "25px" }} variant="h6" gutterBottom>
                <b>UserName:</b> {userById.username}
              </Typography>
              <Typography sx={{ fontSize: "25px" }} variant="h6" gutterBottom>
                <b>Email:</b> {userById.email}
              </Typography>
              <Typography sx={{ fontSize: "25px" }} variant="h6" gutterBottom>
                <b>Phone:</b> {userById.phone}
              </Typography>
              <Typography sx={{ fontSize: "25px" }} variant="h6" gutterBottom>
                <b>Website:</b> {userById.website}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
