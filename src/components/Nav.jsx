import React, { useState } from 'react'
import { navLinks } from './Data'
import {FiMenu} from 'react-icons/fi'
import {FaTimesCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = () => {
    const [showNav, setShowNav] = useState(false)
  return (
    <>
    <header>
        <nav>
            <div className='nav__logo'>
                <h1>Gerícht</h1>  
            </div>
        
            <ul className='nav__links'>
                {navLinks.map((item) => { 
                    const {id, url, link} = item
                    return <li key={id}><a href={url}>{link}</a></li>
                })}
            </ul>
        
            <div className='nav__reg'>
                <Link to="/">Login/Registration</Link>
                <Link to="/">Book Table</Link>
            </div>
            <div className='menu__open' onClick={() => setShowNav(!showNav)}>
                    <FiMenu/>
                </div> 
        </nav>
        {showNav && <div className='mobile__nav--container'>
            <div className='mobile__nav'>
                <div className='menu__close'>
                    <FaTimesCircle/>
                </div>
                <div className='mobile__links'>
                    <ul>
                        {navLinks.map((item) => { 
                            const {id, url, link} = item
                            return <li key={id}><a href={url}>{link}</a></li>
                        })}
                    </ul>
                    <div className="mobile__reg">
                        <Link to="/">Login/Registration</Link>
                        <Link to="/">Book Table</Link>
                    </div>
                </div>
            </div>
        </div>}
    </header>
    </>
  )
}

export default Nav