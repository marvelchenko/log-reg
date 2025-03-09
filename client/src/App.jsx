import Dashboard from "./components/Dashboard/Dashboard"
import './App.css'
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
    </>
  )
}

export default App
