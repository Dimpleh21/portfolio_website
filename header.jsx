import React from 'react'
import ME from '../../assets/my1.png'
import './Header.css'

import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Dimple Harjani</h1>
         <h5 className="text-light"></h5>
         <CTA/>
         <HeaderSocials/>
         <div className="me">
          <img src={ME} alt="me" />
         </div>
         <a href="#contact"className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  ) 
}

export default Header