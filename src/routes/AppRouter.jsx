
import { Route, Routes } from "react-router-dom";
import { Users } from "../pages/Users";
import { AddUser } from "../pages/AddUser";
import { ViewUser } from "../pages/ViewUser";
import { EditUser } from "../pages/EditUser";
import { useUsers } from "../hooks/useUsers";

export const AppRouter = () => {
  const {
    closeModal,
    handleAddUser,
    handleDeleteUser,
    handleEdit,
    handleEditUser,
    handleView,
    open,
    openModal,
    userById,
    users,
    editUser
  } = useUsers();

  return (
    <>
      {/* Rutas */}
      <Routes>
        <Route
          path="/"
          element={
            <Users
              users={users}
              open={open}
              openModal={openModal}
              closeModal={closeModal}
              handleDeleteUser={handleDeleteUser}
              handleView={handleView}
              handleEdit={handleEdit}
            />
          }
        />
        <Route path="/addUser" element={<AddUser onSubmit={handleAddUser} />} />

        <Route
          path="/viewUser/:id"
          element={<ViewUser userById={userById} />}
        />

        <Route
          path="/editUser/:id"
          element={<EditUser editUser={editUser} onSubmit={handleEditUser} />}
        />
      </Routes>
    </>
  );
};
