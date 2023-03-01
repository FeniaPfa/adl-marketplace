import { Container } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import UserContextProvider from "./context/userContext"
import { Home } from "./views/Home"
import { Login } from "./views/Login"
import { Register } from "./views/Register"


function App() {


  return (
    <>
    <UserContextProvider>
    <Navbar />
    <Container maxWidth="lg" sx={{margin: "2rem auto"}}>



    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    </Routes>

    </Container>

    </UserContextProvider>
    </>
  )
}

export default App
