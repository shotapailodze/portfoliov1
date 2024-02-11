import React from 'react'
import './navbar.scss'


const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className='wrapper'>
        <span>Pailodze</span>
        <div className='social'>
            <a href='https://www.instagram.com/pailodzee/'><img src='/public/instagram.png' alt='' /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
