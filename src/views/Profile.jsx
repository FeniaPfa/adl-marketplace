import { useUserContext } from '../context/userContext'

export const Profile = () => {
  const { user } = useUserContext()
  return (
    <>
    <p>{user.email}</p>
    <p>{user?.displayName}</p>
    <img src={user.photoURL} width="200px" />
    
    </>
  )
}
