import { Form } from "../components/Form"



export const AddUser = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit} titleButton = "Add User" titleButtonTwo="Add New User" initialValue={{}}/>
  )
}
