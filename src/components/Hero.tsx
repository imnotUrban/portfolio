import React from 'react'
import '../styles/hero.css'
import 'animate.css';


export const Hero = () => {
  return (
    <section className='hero'>
        <div className='left animate__animated animate__fadeIn animate__slow'>
            <p> ¡Hola! soy <span> Gerson Andrade Meza </span>  </p>
            <h1> Ingeniero Civil Informático </h1>
            <a href='#contact' className='contacto_button'>  CONTACTO </a>
            
        </div>
        <div className='right animate__animated animate__fadeIn animate__slow'>
            <p>¡Hola! Soy un estudiante universitario apasionado por el desarrollo y la resolución de problemas. A lo largo de mis estudios, he cultivado habilidades en diversos lenguajes y lógica de programación, destacándome especialmente en el backend gracias a mi enfoque ordenado y metódico.</p>

            <p>A mis 24 años, busco constantemente aprender y mejorar mis habilidades. También me gusta el <span>pan con chicharrón</span>, la naturaleza y el boxeo.</p>
            <a href='#contact' className='contacto_button'>  CONTACTO </a>
        </div>
    </section>
  )
}
