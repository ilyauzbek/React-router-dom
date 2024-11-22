import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <>

   <div>Header</div>

   
   <nav>
    <Link to={'/'}>Home</Link>
    <Link to={'/Aboute'}>Aboute</Link>
   </nav>
   </>
  )
}

export default Header