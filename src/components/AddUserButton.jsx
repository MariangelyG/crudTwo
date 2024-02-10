import {  Button } from "@mui/material"
import { useNavigate } from "react-router-dom"



export const AddUserButton = () => {


    const navigate = useNavigate() 
//Función para redirigir a la página addUsers al hacer click en el botón
    const handleNavigate = () =>{
        navigate("/addUser")
    }

    

  return (
    //Botón para agregar un nuevo usuario
  <>
    <Button 
        variant="contained" 
        color="success"
        onClick={handleNavigate}
        sx={{display:'flex'}}
        >
            Add User
    </Button>
    
  </>

  
  )
}
