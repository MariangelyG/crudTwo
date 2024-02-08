import { Form } from "../components/Form"



export const AddUser = ({onSubmit}) => {
  return (
    <Form onSubmit={onSubmit} titleButton = "Add User" titleButtontwo="Add New User" initialValue={{}}/>
  )
}
