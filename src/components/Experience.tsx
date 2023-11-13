import React from 'react';
import '../styles/experience.css';


const Experience = () => {
  return (
    <div id='experience'>
        <div className='centerTitle'> 
            <h2>Experiencia Laboral</h2>
        </div>
        <div  className='experience'>
            <div className='experience-item'>
                <div className='experience-details'>
                    <p className='experience-company'>HeyAndes SPA</p>
                    <p className='experience-location'>Santiago/Teletrabajo</p>
                    <p className='experience-role'>Desarrollador web</p>
                    <p className='experience-period'>Septiembre del 2021 - Diciembre del 2021</p>
                </div>
                <div className='experience-description'>
                    <p>
                        Durante mi práctica en HeyAndes SPA, trabajé como desarrollador web, enfocándome en la creación de sitios web para empresas turísticas. Esta experiencia mejoró mis habilidades en <span>diseño y desarrollo web. </span> 
                    </p>
                    <p>
                    Además, colaboré en reuniones con clientes, mejorando mis habilidades de <span>comunicación y trabajo en equipo. </span> 

                    </p>
                    <p>
                    Realicé investigaciones para mantenerme actualizado en tecnologías y tendencias, perfeccionando mis habilidades de <span>adaptación e investigación.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Experience;
