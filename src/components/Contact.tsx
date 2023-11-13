import React from 'react'
import '../styles/contact.css'

import {AiFillLinkedin, AiFillGithub ,AiOutlineMail} from 'react-icons/ai'

export const Contact = () => {
  return (
    <section className='footer-section' id='contact'>
        <div>
            <h2> Contacto </h2>
            <hr/>
        </div>
        <footer className='footer-content'>
            <div  className='left'>
                <h3> E-Mail <span> <AiOutlineMail /></span></h3>
                <p> gerson.a.meza@gmail.com</p>

            </div>

            <div className='right'>

                <h3> Redes sociales  </h3>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/gerson-andrade-meza-446470264/' target='_blank'><AiFillLinkedin /></a>
                    </li>
                    <li>
                        <a href='https://github.com/imnotUrban' target='_blank'><AiFillGithub /></a>
                    </li>
                </ul>
            </div>

        </footer>
        <div>
                <div id="copyright"><p>Copyright&copy; 2023 - Página creada por Gerson Andrade - Todos los derechos reservados</p></div>
            </div>
    </section>
    
  )
}
