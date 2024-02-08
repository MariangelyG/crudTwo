import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



export const ViewUser = ({userById}) => {

    const navigate = useNavigate()

    const handleNavigate =()=>{
        navigate("/")
    }


  return (
   <>
        <Box
            // padding={2}
            sx={{
            display: "flex",
            flexDirection:"column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            }}>

            <Card
                sx={{
                bgcolor: "#3c3c3c",
                color: "white",
                padding: "10px",
                width: "50%",
                height: "50vh",
                boxShadow: "10px 10px 20px #111",
                borderRadius: "18px",
                textAlign:"center",
              
                }}>
                    
                 <Button  
                    sx={{display:"flex", color:"red"}}
                    onClick={()=>handleNavigate()}
                    >
                        <ArrowBackIcon/>
                       
                </Button> 
                         <Typography variant="h4"><b>USER DETAILS: {userById.name}</b></Typography>
               

                
                <CardContent>
                     {/* detalles de usuario */}
                    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Typography sx={{fontSize:"25px"}} variant="h6" gutterBottom>
                            <b>FirstName:</b> {userById.name}
                        </Typography>
                        <Typography sx={{fontSize:"25px"}} variant="h6" gutterBottom>
                            <b>UserName:</b> {userById.username}
                        </Typography>
                        <Typography sx={{fontSize:"25px"}} variant="h6" gutterBottom>
                            <b>Email:</b> {userById.email}
                        </Typography>
                        <Typography sx={{fontSize:"25px"}} variant="h6" gutterBottom>
                            <b>Phone:</b> {userById.phone}
                        </Typography>
                        <Typography sx={{fontSize:"25px"}} variant="h6" gutterBottom>
                            <b>Website:</b> {userById.website}
                        </Typography>
                    </Box>
                    {/* </Box> */}
                </CardContent>
          </Card>

          {/* Botón para ir hacia atrás */}
                {/* <Button 
                    variant="contained" 
                    color="success" 
                    sx={{mt:3}}
                    onClick={()=>handleNavigate()}
                    >
                        <ArrowCircleLeftIcon/>
                </Button> */}
        </Box>
   
   </>
  )
}
