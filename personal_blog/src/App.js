import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import CreateAccount from './components/CreateAccount'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const userToken = localStorage.getItem('userToken')
  const isUserLoggedIn = !!userToken

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login isUserLoggedIn={isUserLoggedIn} />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
