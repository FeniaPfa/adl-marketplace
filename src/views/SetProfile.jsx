import { useUserContext } from "../context/userContext"

export const SetProfile = () => {

  const { user } = useUserContext()

  return (
    <>
    <p>
      {user.email}
      
      </p>
    
    </>
  )
}
