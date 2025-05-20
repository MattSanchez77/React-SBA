import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Calendar from './pages/Calendar'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {
 

  return (
    <>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Calendar />} />
        <Route path="/dashboard" element={<SignIn />} />
        <Route path="/create" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
