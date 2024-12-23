import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div>Logo</div>
        <ul className='navigation'>
            <li>Home</li>
            <li>Contact</li>
            <li>Wishlist</li>
        </ul>
    </div>
  )
}

export default Header