import React from 'react'

import "@/styles/nosotros.css";

const Nosotros = () => {
  return (
    <section id='contenedor-nosotros'>
      <div className='contenedor-contenido'>
        <div className='caja-contenido sm:w-3/4 flex justify-center items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-6xl xl:text-8xl font-inter font-medium tracking-wide'>
            <span className='wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.2s">Nuestra solida presencia en los procesos del comercio exterior </span>
            <span className='text-azul-cruzdelsur wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">garantizan eficacia y agilidad</span>
          </h1>
        </div>
      </div>
      <div className='z-50 h-full'>
        <div className='flex h-full relative'>
          <div className='contenedores-fondo z-10'></div>
          <div className="filtro-background-nosotros"></div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros