import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Calendar from './pages/Calendar'
import Nav from './components/Nav/Nav'
import About from './pages/About'


function App() {
 

  return (
    <>
    <Nav />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
