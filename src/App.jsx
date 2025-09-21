import './App.css'
import Home from './components/home/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import AboutPage from './components/about/about'
import Projectpage from './components/project/project'
function App() {
  
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/project' element={<Projectpage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
