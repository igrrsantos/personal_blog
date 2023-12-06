import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateAccount from './components/CreateAccount.js'
import Login from './components/Login.js'
import Dashboard from './components/Dashboard.js'
import Home from './components/Home.js'
import NavBar from './components/NavBar.js'
import EditProfile from './components/EditProfile.js'

function App() {
  return (
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
  )
}

export default App
