import React from 'react'

import homeStyles from "./home.module.css";

import Servicios from './servicios';

const Despachantes = () => {
  return (
    <section id='despachantes-servicios' className={`${homeStyles.servicios_background} relative py-24`}>
        <div className='px-20 pt-8 relative z-20'>
          <div id="contenido" className='mx-auto'>
            <h1 className={`${homeStyles.titulo_con_sombra} text-5xl tracking-wide text-white titulo font-normal text-center`}><span className=''>Somos despachantes</span> de Aduana</h1>
            <h1 className={`${homeStyles.titulo_con_sombra} text-5xl tracking-wide text-white titulo font-bold text-center`}><span className=''>y nos apasiona nuestra profesión</span></h1>
          </div>
        </div>
        <Servicios />
        <div className={homeStyles.background}>
          <div className={homeStyles.bg_container}>
            <div className={homeStyles.img_container}>
              <div id='imagen-despachantes' className={`${homeStyles.image} ${homeStyles.image_despachantes}`}></div>
            </div>
          </div>
        </div>
        <div className="h-full w-full bg-black opacity-50 absolute top-0 left-0 z-10"></div>
    </section>
  )
}

export default Despachantes;