import { Form } from "../components/Form"

//Page con el formulario para agregar un nuevo ususario

export const AddUser = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit} titleButton = "Add User" titleButtonTwo="Add New User" initialValue={{}}/>
  )
}
