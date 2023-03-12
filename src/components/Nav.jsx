import React from 'react'
import { navLinks } from './Data'

const Nav = () => {
  return (
    <>
    <header>
        <div className='nav__logo'>
            <h1>gericht</h1>
        </div>
        <nav>
            <ul>
                {navLinks.map((item) => { 
                    const {id, url, link} = item
                    return <li key={id}><a href={url}>{link}</a></li>
                })}
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Nav