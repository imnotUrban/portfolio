import React from 'react'
import '../app/page.module.css'
import '../styles/navBar.css'

import 'animate.css';
export const NavBar = () => {
  return (
    <nav className={'navBar'}>
      <ul>
        <li>

            <a href='#proyects' className='animate__animated animate__fadeIn animate__slow'> PROYECTOS </a>
        </li>
        <li>
            <a href='#skills' className='animate__animated animate__fadeIn animate__slow'> HABILIDADES </a>
        </li>
        <li>
            <a href='#contact' className='animate__animated animate__fadeIn animate__slow'> CONTACTO </a>
        </li>
        
      </ul>


    </nav>
  )
}
