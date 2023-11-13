import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import NavBar from './components/NavBar'
import EditProfile from './components/EditProfile'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
