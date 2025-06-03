import './App.css'
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
function App() {
  
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
