import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }


    return (
        <nav className="nav">
            <div className="container">
                <div className="logo">
                    <img src="./SAGEROOTS INTERNATIONAL(Blue).svg" className='nav-brand' alt="logo" />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <div class="burger " id="burger">
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        <span class="burger-line"></span>
                        </div>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/apply">How to Apply</NavLink>
                        </li>
                        <li>
                            <NavLink to="/university">University Partners</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Our Partners</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
