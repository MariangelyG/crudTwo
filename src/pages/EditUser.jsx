import { useParams } from "react-router-dom"
import { Form } from "../components/Form"



export const EditUser = ({editUser, onSubmit}) => {

    const {id} = useParams()

  return (
    <>
     <Form titleButton="update user" titleButtontwo="Edit User" initialValue={editUser} onSubmit={onSubmit} id={id}/>
     {/* <code>{JSON.stringify(userById)}</code> */}
    </>
  )
}
