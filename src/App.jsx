import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Navbar from './Components/Navbar'
import { AuthContextProvider } from './Context/AuthContext'
import Protectedroute from './Components/Protectedroute'

const App = () => {
  return <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Protectedroute><Profile /></Protectedroute>} />
      </Routes>
    </AuthContextProvider>

  </>
}

export default App