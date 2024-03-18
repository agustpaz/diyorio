import { useEffect, useState } from 'react'
import Contador from './contador'

import homeStyles from "./home.module.css"

const QuienesSomos = () => {

  return (
    <section id='quienes-somos' className={`sm:grid xl:grid-cols-2 gap-5 xl:p-14`}>
        <div className='px-8 pb-20 xl:px-28flex flex-col items-center wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">
            <div className={`mt-16 ${homeStyles.imagen_planisferio}`}>
                <h1 className={`mt-16 text-4xl xl:text-5xl tracking-wide text-black font-semibold text-center uppercase`}>Quienes somos</h1>
                <div className='mb-16 separador-texto bg-verde-400 w-1/4 mx-auto mt-3 h-1'></div>
                <p className='text-2xl xl:text-2.5xl text-center'>
                    Somos una empresa familiar, cuatro generaciones con más de 60 años de experiencia asesorando y gestionando operaciones de comercio exterior.
                </p>
                <p className='text-2xl xl:text-2.5xl text-center'>
                    Ofrecemos una atención personalizada acorde a los requerimientos y modalidades de nuestros clientes. Todas nuestras gestiones están respaldadas por un excelente equipo de profesionales altamente capacitados.
                </p>
            </div>
        </div>
        
        <div className='w-full h-full flex items-center'>
            <div className={`${homeStyles.imagen_puerto} w-full xl:rounded-full shadow-2xl flex justify-center items-center relative`}>
                <div className='grid grid-cols-2 gap-4 z-20'>
                    <Contador 
                        initialValue={1930}
                        targetValue={1963}
                        leyenda={"Cuando empezamos"}
                        milisegundos={50}
                        id={"cuando-empezamos"}
                    />

                    <Contador
                        initialValue={55}
                        targetValue={60}
                        leyenda={"Clientes"}
                        milisegundos={640}
                        id={"clientes"}
                    />
                </div>
                <div className='absolute w-full h-full bg-black/60 xl:rounded-full z-10'></div>
            </div>
        </div>

        <div className='w-full h-full items-center hidden xl:flex'>
            <div className={`${homeStyles.imagen_puerto} w-full rounded-full shadow-2xl flex justify-center items-center relative`}>
                <div className='grid grid-cols-2 gap-4 z-20'>
                    <Contador 
                        initialValue={60}
                        targetValue={120}
                        leyenda={"Proyectos realizados"}
                        milisegundos={35}
                        id={"proyectos-realizados"}
                    />

                    <Contador
                        initialValue={70}
                        targetValue={100}
                        leyenda={"de nuestros clientes nos recomiendan"}
                        milisegundos={50}
                        id={"porciento"}
                        porcentaje={true}
                    />
                </div>
                <div className='absolute w-full h-full bg-black/60 rounded-full z-10'></div>
            </div>
        </div>

        <div className='px-8 py-20 xl:px-28 flex flex-col items-center wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">
            <div>
                <p className='text-2xl xl:text-2.5xl text-center'>
                    Su vasta experiencia garantiza una ágil coordinación con los organizamos que intervienen en la actividad, optimizando de esta manera nuestro servicios y posicionándonos como uno de los lideres en el mercado.
                </p>
                <p className='text-2xl xl:text-2.5xl text-center'>
                    Contamos con representantes en las principales Aduanas, facilitando la operativa desde cualquier punto del país.
                </p>
            </div>
        </div>

        <div className='w-full h-full flex items-center xl:hidden'>
            <div className={`${homeStyles.imagen_puerto} w-full xl:rounded-full shadow-2xl flex justify-center items-center relative`}>
                <div className='grid grid-cols-2 gap-4 z-20'>
                    <Contador 
                        initialValue={60}
                        targetValue={120}
                        leyenda={"Proyectos realizados"}
                        milisegundos={35}
                        id={"proyectos-realizados-chico"}
                    />

                    <Contador
                        initialValue={70}
                        targetValue={100}
                        leyenda={"de nuestros clientes nos recomiendan"}
                        milisegundos={50}
                        id={"porciento-chico"}
                        porcentaje={true}
                    />
                </div>
                <div className='absolute w-full h-full bg-black/60 xl:rounded-full z-10'></div>
            </div>
        </div>
    </section>
  )
}

export default QuienesSomos;