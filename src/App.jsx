import { useState } from 'react'
import './App.css'
import Navbar from './NavBar/Navbar';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className='flex flex-col w-full justify-between h-screen'>
      
        <div className='flex'>
          <Navbar />
        </div>
        <div className=''>
          <Outlet />      
        </div>
        <div className='flex   justify-center'>
          <Footer />
        </div>
        
    </div>
  )
}
export default App;
