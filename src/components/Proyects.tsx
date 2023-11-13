import React, { useEffect, useRef, useState } from 'react';
import '../styles/proyects.css';
import data from '../data/proyects.json';
import {AiFillGithub} from 'react-icons/ai'
import { DiCss3,DiDocker, DiGithubBadge,DiHtml5,DiJavascript1,DiMongodb,DiMysql,DiPython,DiReact,DiTrello,DiWordpress } from "react-icons/di";
import {SiJquery,SiLeaflet,SiFastapi,SiExpress, SiCplusplus,SiMariadbfoundation, SiNotion} from 'react-icons/si'
import {BiLogoPhp,BiLogoFlask,BiLogoTypescript} from 'react-icons/bi'
import renderIcon from '@/hooks/iconHook';

const proyects = data.proyects;

export const Proyects = () => {

  const clicker = () =>{
    console.log('XD')
  }


  const wrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<NodeListOf<HTMLDivElement> | null>(null);

  useEffect(() => {
    const handleMouseMove = ($event: MouseEvent) => {
      if (cardsRef.current) {
        cardsRef.current.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = $event.clientX - rect.left;
          const y = $event.clientY - rect.top;

          card.style.setProperty('--xPos', `${x}px`);
          card.style.setProperty('--yPos', `${y}px`);
        });
      }
    };

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);


  const renderProyects = proyects.map( proyect =>
    <div className='card' key={proyect.id} ref={(element) => (cardsRef.current = document.querySelectorAll('.card'))}>
            <div className='card-content'>
              <h3> {proyect.title}  <a href={proyect.link} target='_blank'> <AiFillGithub/></a></h3>
              <p>{proyect.description}</p>
              <div className='icons'>
                {proyect.tecnology.map((item, index) => (
                  <p key={index}>
                    {renderIcon(item)}
                  </p>
                ))}
              </div>
              


              {/* <button onClick={clicker}>Abrir s</button> */}

              </div>
            </div>
    );


  return (
    <div id='proyects'>
        <div className='h2Title'>

            <h2>Proyectos</h2>
        </div>
        <div className='cardContainer'>
        <div className='cards' ref={wrapperRef}>
            {renderProyects}
        </div>
        </div>
    </div>

  );
};


{/* <div className='card' ref={(element) => (cardsRef.current = document.querySelectorAll('.card'))}>
            <div className='card-content'></div>
            </div>
            <div className='card'>
            <div className='card-content'></div>
            </div>
            <div className='card'>
            <div className='card-content'></div>
            </div>
            <div className='card'>
            <div className='card-content'></div>
            </div>
            <div className='card'>
            <div className='card-content'></div>
            </div>
            <div className='card'>
            <div className='card-content'></div>
            </div> */}