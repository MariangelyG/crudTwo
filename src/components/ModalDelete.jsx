import { Box, Button, Modal, Typography } from "@mui/material"


export const ModalDelete = ({open, closeModal, handleDeleteUser}) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: "#3c3c3c",
    boxShadow: 24,
    pt: 2,
    px: 6,
    pb: 3,
    borderRadius: 5,
    
    color:"white"
    
  };

  return (
    <>
        <Modal
        open={open}
        onClose={closeModal}
     
      >
        <Box sx={{ ...style, width: 300 }}>
          {/* <Typography variant="h5" sx={{display:"flex", justifyContent:"center"}}><b>ELIMINAR USUARIO</b></Typography> */}
          <Typography variant="spam" >
            ¿Estás seguro que quieres eliminar el usuario?
          </Typography>
          <Box
          sx={{display:"flex", justifyContent: "space-around"}}>
          <Button variant="contained" color="success" onClick={handleDeleteUser} sx={{ fontSize:15, mt:2, borderRadius:5}}><b>SI</b></Button>
          <Button  variant="contained" color="error" onClick={closeModal} sx={{fontSize:15, mt:2, borderRadius:5}}><b>NO</b></Button>
          </Box>
        </Box>
      </Modal>
    </>
  )
}
