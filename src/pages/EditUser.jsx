import { useParams } from "react-router-dom";
import { Form } from "../components/Form";

//´Page con el formulario para editar la información de un usuario seleccionado
export const EditUser = ({ editUser, onSubmit }) => {
  const { id } = useParams();

  return (
    <>
      <Form
        titleButton="update user"
        titleButtonTwo="Edit User"
        initialValue={editUser}
        onSubmit={onSubmit}
        id={id}
      />
      {/* <code>{JSON.stringify(userById)}</code> */}
    </>
  );
};
