import React from 'react'
import '../styles/skills.css'

import { DiCss3,DiDocker, DiGithubBadge,DiHtml5,DiJavascript1,DiMongodb,DiMysql,DiPython,DiReact,DiTrello,DiWordpress } from "react-icons/di";
import {SiLeaflet,SiFastapi,SiExpress, SiCplusplus,SiMariadbfoundation, SiNotion} from 'react-icons/si'
import {BiLogoFlask,BiLogoTypescript} from 'react-icons/bi'
import '../styles/navBar.css'
export const Skills = () => {
  return (
    <section id='skills'>

      <div  className='tecnology animate__animated animate__flipInX animate__slow'>

          <h2 > Conocimiento </h2>
      </div>
      <div className='tecnologyicons'>
        <div className='tecnologyItem tecnology animate__animated animate__lightSpeedInLeft '>
            <h4> FrontEnd </h4>
            <ul className='iconBox'>
              <li><SiLeaflet /></li>
              <li> <DiHtml5/>   </li>
              <li> <DiJavascript1/>   </li>
              <li> <DiReact/>   </li>
              <li> <BiLogoTypescript />   </li>
              <li> <DiCss3 />   </li>
            </ul>
            
          </div>

          <div className='tecnologyItem animate__animated animate__fadeInUp'>
            <h4> BackEnd </h4>
            <ul className='iconBox'>
              <li> <DiMongodb/>   </li>
              <li> <DiMysql/>   </li>
              <li> <DiPython/>   </li>
              <li> <SiFastapi/>   </li>
              <li> <SiExpress/>   </li>
              <li> <BiLogoFlask />   </li>
              <li> <SiCplusplus />   </li>
              <li> <SiMariadbfoundation />   </li>
            </ul>
            
          </div>

          <div className='tecnologyItem animate__animated animate__lightSpeedInRight '>
            <h4> Herramientas</h4>
            <ul className='iconBox'>
              <li> <DiGithubBadge/>   </li>
              <li> <DiTrello/>   </li>
              <li> <DiWordpress/>   </li>
              <li> <DiDocker/>   </li>
              <li> <SiNotion/>   </li>
            </ul>
          </div>

      </div>
    </section>
  )
}
