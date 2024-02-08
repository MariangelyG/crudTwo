import { useEffect, useState } from "react";
import { useModal } from "./useModal";
import { useNavigate } from "react-router-dom";


export const useUsers = () => {
    const { open, openModal, closeModal, userDelete } = useModal();
//Estado de Usuarios
    const [users, setUsers] = useState([]);
 
    const [userById, setUserById] = useState({});
  
    const [editUser, setEditUser] = useState(null);
  
  
    const navigate = useNavigate();
  
    //Petición a la API que devuelve los 10 usuarios
    const getUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      // Actualiza el estado
      setUsers(data);
    };
    //Función para agregar un nuevo usuario
    const handleAddUser = (user) => {
        const newUser = {
            id: users.length+1,
            ...user
        }
      setUsers([...users, newUser]);
    };
  
    const handleDeleteUser = () => {
      setUsers(users.filter((item) => item.id !== userDelete));
      closeModal();
    };
  
    const handleView = (id) => {
      setUserById(users.find((item) => item.id === id));
    };
  
    const handleEdit = (user) => {
      navigate(`/editUser/${user.id}`);
      setEditUser(user);
     
    };
  
    const handleEditUser = (user) =>{
     const result = users.map((item)=> item.id === editUser.id ? {...item, ...user } : item)
      setUsers(result)
    }
  
    //Ejecuta la función getUsers cuando se monta por primera vez
    useEffect(() => {
      getUsers();
    }, []);

    return{
        users,
        open,
        openModal,
        closeModal,
        handleDeleteUser,
        handleView,
        handleEdit,
        handleAddUser,
        handleEditUser,
        userById,
        editUser,
    
    }
}
