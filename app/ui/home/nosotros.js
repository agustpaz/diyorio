import React from 'react'

import "@/styles/nosotros.css";

const Nosotros = () => {
  return (
    <section id='contenedor-nosotros'>
      <div className='contenedor-contenido'>
        <div className='caja-contenido sm:w-3/4 flex justify-center items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-inter font-medium tracking-wide'>Somos una empresa dedicada a la gestión profesional aduanera para la <span className='text-azul-cruzdelsur'>importación y exportación de productos</span></h1>
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