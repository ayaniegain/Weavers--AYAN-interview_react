import React from 'react'
import Home from './Home'
import FooterComp from './FooterComp'

function Navigation({children}) {
  return (
    <div>
        <Home/>
        {children}
        <FooterComp/>
    </div>
  )
}

export default Navigation