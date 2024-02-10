import { Box, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const Buttons = ({ openModal, id, handleView, handleEdit, user }) => {
  const navigate = useNavigate();
  //Función para que muestre la informacion del id seleccionado
  const handleNavigate = () => {
    navigate(`/viewUser/${id}`);
    handleView(id);
  };

  return (
    //Botones: Borrar, ver, editar
    <Box sx={{ display: "flex", gap: "14px", justifyContent: "center" }}>
      <Button variant="contained" color="error" sx={{borderRadius: 3}} onClick={() => openModal(id)}>
        <DeleteIcon />
      </Button>
      <Button variant="contained" color="secondary" sx={{borderRadius: 3}} onClick={handleNavigate}>
        <VisibilityIcon />
      </Button>
      <Button variant="contained" color="info" sx={{borderRadius: 3}} onClick={() => handleEdit(user)}>
        <EditIcon />
      </Button>
    </Box>
  );
};
