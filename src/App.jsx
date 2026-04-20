import './App.css'
import Home from './components/home/home'
import Team from './components/team/team'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import AboutPage from './components/about/about'
import Projectpage from './components/project/project'
import Resources from './components/resources/resources'
function App() {
  
  return (
    <>
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/project' element={<Projectpage />} />
          <Route path='/resources' element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
