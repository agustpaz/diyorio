import React from 'react'

import homeStyles from "./home.module.css"

const QuienesSomos = () => {
  return (
    <section id='quienes-somos' className={`sm:grid sm:grid-cols-2`}>
        <div className='p-10 py-20 sm:p-28 flex flex-col items-center wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">
            <h1 className={`text-4xl sm:text-6xl tracking-wide text-black font-semibold text-center`}>Quienes somos</h1>
            <div className='separador-texto bg-verde-400 w-1/4 mx-auto mt-3 h-1'></div>
            <div className='mt-16'>
                <p className='text-2xl sm:text-3xl text-center'>
                    Somos una empresa familiar, cuatro generaciones con más de 57 años de experiencia asesorando y gestionando operaciones de comercio exterior. Ofrecemos una atención personalizada acorde a los
                    requerimientos y modalidades de nuestros clientes. Todas nuestras gestiones están respaldadas por un
                    excelente equipo de profesionales altamente
                    capacitados.
                </p>
            </div>
        </div>
        <div className={`w-full h-full ${homeStyles.imagen_puerto}`}></div>
        <div className={`hidden sm:block w-full h-full ${homeStyles.imagen_puerto}`}></div>
        <div className='p-10 py-20 sm:p-28 flex flex-col items-center wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">
            {/* <h1 className={`text-6xl tracking-wide text-black font-semibold text-center`}>Que te ofrecemos</h1>
            <div className='separador-texto bg-verde-400 w-1/4 mx-auto mt-3 h-1'></div> */}
            <div>
                <p className='text-2xl sm:text-3xl text-center'>
                    Nuestra vasta experiencia garantiza una ágil
                    coordinación con los organizamos que intervienen
                    en la actividad, optimizando de esta manera nuestro
                    servicios y posicionándonos como uno de los
                    lideres en el mercado.
                    Contamos con representantes en las principales 
                    Aduanas, facilitando la operativa desde cualquier punto del país.
                </p>
            </div>
        </div>
    </section>
  )
}

export default QuienesSomos;