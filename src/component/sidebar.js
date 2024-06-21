import React from 'react'
import Logo from '../assets/Logo-Square.svg'
import '../App.css';


function sidebar() {
  return (
    <div className='SideBar'>
        <div className='logo'>
            <img src={Logo} alt="logo"/>
        </div>
    </div>
  )
}

export default sidebar;