import React, { useState } from 'react'
import {  Routes, Route, NavLink } from 'react-router-dom'
import About from '../Pages/About'
import Home from '../Pages/Home'
import '../Navbar/Navheader.css'
import PhoneOtpForm from '../Pages/PhoneOtpForm'
import Login from '../Pages/Login'
import Accordian from '../Pages/Accordian'
import TodoApp from '../Pages/TodoApp'
import SelectField from '../SelectField/SelectField'
import Calculator from '../Calculator/Calculator'

const Navheader = () => {

    const [isMenuOpen , setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

  return (
    <>
 

            <header className='bg-color'>
                <div className='container'>
                    <nav className='nav-header'>
                        <div className='logo'>
                            <NavLink className="brand-logo" to="/">Website</NavLink>
                        </div>

                        <div className='menu' onClick={toggleMenu}>
                            <div className='menu-icon'></div>
                            <div className='menu-icon'></div>
                            <div className='menu-icon'></div>
                        </div>

                        <ul className={isMenuOpen ? 'nav-links active' : 'nav-links'}>
                            <li className='nav-item'><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
                            <li className='nav-item'><NavLink to="/about" onClick={toggleMenu}>Weather App</NavLink></li>
                            <li className='nav-item'><NavLink to="/todo" onClick={toggleMenu}>Todo List</NavLink></li>
                            <li className='nav-item'><NavLink to="/phoneOtp" onClick={toggleMenu}>Otp Generator</NavLink></li>
                            <li className='nav-item'><NavLink to="/accordian" onClick={toggleMenu}>Accordian</NavLink></li>
                            <li className='nav-item'><NavLink to="/SelectField" onClick={toggleMenu}>SelectField</NavLink></li>
                            <li className='nav-item'><NavLink to="/calculator" onClick={toggleMenu}>Calculator</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>} ></Route>
                <Route path='/todo' element={<TodoApp/>} ></Route>
                <Route path='/phoneOtp' element={<PhoneOtpForm/>} ></Route>
                <Route path='/login' element={<Login/>} ></Route>
                <Route path='/accordian' element={<Accordian/>} ></Route>
                <Route path='/SelectField' element={<SelectField/>} ></Route>
                <Route path='/calculator' element={<Calculator/>} ></Route>
            </Routes>
       
            

    </>
  )
}

export default Navheader