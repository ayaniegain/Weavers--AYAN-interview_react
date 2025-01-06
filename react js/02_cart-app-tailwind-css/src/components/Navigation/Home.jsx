import React from 'react'
import Search from '../Search/Search'

import logo from "../../../src/assets/logo.png"
import LoginButton from '../Button/LoginButton'

function Home() {
  return (
    <div className='navbar bg-blue-500 flex h-14 justify-between px-4 md:px-16 lg:px-32 items-center sticky top-0 z-10'>
      <div className='flex space-x-4 md:space-x-6'>
        <div className="logo-container">
          <img src={logo} alt="logo" className='h-8 w-10 md:h-10 md:w-12 rounded-2xl' />
        </div>
        <div className="search">
          <Search/>
        </div>
      </div>
      <div className='btn-container pr-0'>
        <LoginButton/>
      </div>
    </div>
  )
}

export default Home