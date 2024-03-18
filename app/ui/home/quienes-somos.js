import { useEffect, useState } from 'react'
import Contador from './contador'

import homeStyles from "./home.module.css"

const QuienesSomos = () => {

  return (
    <section id='quienes-somos' className={`sm:grid xl:grid-cols-2 gap-5 xl:p-14`}>
        <div className='px-8 pb-20 xl:px-28flex flex-col items-center wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">
            <div className={`mt-16 ${homeStyles.imagen_planisferio}`}>
                <h1 className={`mt-16 text-4xl xl:text-5xl tracking-wide text-black font-semibold text-center uppercase`}>Quienes somos</h1>
                <div className='mb-16 separador-texto bg-verde-400 w-1/4 mx-auto mt-3 h-2'></div>
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
                        path={"M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"}
                    />

                    <Contador
                        initialValue={55}
                        targetValue={60}
                        leyenda={"Clientes"}
                        milisegundos={600}
                        id={"clientes"}
                        path={"M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"}
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
                        path={"m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"}
                    />

                    <Contador
                        initialValue={70}
                        targetValue={100}
                        leyenda={"de clientes contentos"}
                        milisegundos={50}
                        id={"porciento"}
                        porcentaje={true}
                        path={"M620-520q25 0 42.5-17.5T680-580q0-25-17.5-42.5T620-640q-25 0-42.5 17.5T560-580q0 25 17.5 42.5T620-520Zm-280 0q25 0 42.5-17.5T400-580q0-25-17.5-42.5T340-640q-25 0-42.5 17.5T280-580q0 25 17.5 42.5T340-520Zm140 260q68 0 123.5-38.5T684-400h-66q-22 37-58.5 58.5T480-320q-43 0-79.5-21.5T342-400h-66q25 63 80.5 101.5T480-260Zm0 180q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z"}
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