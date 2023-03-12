import React from 'react'
import { navLinks } from './Data'
import {FiMenu} from 'react-icons/fi'
import {FaTimesCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <header>
        <div className='nav__logo'>
            <h1>Gerícht</h1>
        </div>
        <nav>
            <ul>
                {navLinks.map((item) => { 
                    const {id, url, link} = item
                    return <li key={id}><a href={url}>{link}</a></li>
                })}
            </ul>
        </nav>
        <div className='r'>
            <Link to="/">Login/Registration</Link>
            <Link to="/">Book table</Link>
            <div className='menu__open'>
                <FiMenu/>
            </div>
        </div>
        <div className='mobile__nav'>
            <div className='menu__close'>
                <FaTimesCircle/>
            </div>
            <div>
                <ul>
                    {navLinks.map((item) => { 
                        const {id, url, link} = item
                        return <li key={id}><a href={url}>{link}</a></li>
                    })}
                </ul>
                <Link to="/">Login/Registration</Link>
                <Link to="/">Book table</Link>
            </div>
        </div>
    </header>
    </>
  )
}

export default Nav