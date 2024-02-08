import { useState } from "react"

export const useModal = () => {

    const [open, setOpen] = useState(false)

    const [userDelete, setUserDelete] = useState(null)

    const openModal = (id) =>{
        setOpen(true)
        setUserDelete(id)
    }

    const closeModal = () =>{
        setOpen(false)
    }


  return  {
    open,
    openModal,
    closeModal,
    userDelete, 
}
}
