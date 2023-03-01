import { useState } from "react";
import { register } from "../config/firebase";


export const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault()
    try{
      await register({email, password})
    } catch(err){
      console.log(err.code , err.message)
    }
  }

  return (
    <>
    <h1>Crea tu usuario</h1>
    <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
    
    
    </>
  )
}
