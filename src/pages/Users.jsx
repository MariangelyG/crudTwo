
import { AddUserButton } from '../components/AddUserButton'
import { ModalDelete } from '../components/ModalDelete'
import { TableUsers } from '../components/TableUsers'

//Page Principal, con la tabla que muestra los usuarios, el botón de agregar nuevo usuario y el modal. 
export const Users = ({users, open, openModal, closeModal, handleDeleteUser, handleView, handleEdit}) => {
  return (
    <>
      <AddUserButton />
      <TableUsers users={users} openModal={openModal} handleView={handleView} handleEdit={handleEdit}/>
      <ModalDelete open={open} closeModal={closeModal} handleDeleteUser={handleDeleteUser}/>
    </>
  )
}
