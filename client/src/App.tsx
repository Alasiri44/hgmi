
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/navbar'
import banner from './assets/hgmi-banner.jpg'
import Footer from './components/footer'

function App() {

  return (
    <>
      <NavBar/>
      <img src={banner} alt="HGMI Banner" className="w-full h-100" />
      <Outlet />
      < Footer/>
    </>
  )
}

export default App
