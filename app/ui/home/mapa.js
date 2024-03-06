'use client'

import React from 'react';

import Image from 'next/image';

import flecha from "@/public/assets/images/iconos/flecha-negra.png";
import mapa from "@/public/assets/images/diyorio-mapa.png"
import 'material-icons/iconfont/material-icons.css'
import "@/styles/mapa.css"; 

const Mapa = () => {
  return (
    <section className='pt-20 pb-24 px-10 sm:p-16 sm:pb-24 relative'>
        <div className='lg:grid lg:grid-cols-2 gap-x-10'>
            <div className='sm:px-24 sm:py-48 sm:shadow-2xl'>
                <h1 className='text-5xl text-5xl xl:text-6xl font-semibold'>Donde encontrarnos</h1>
                <div className='separador-texto bg-azul-cruzdelsur w-1/4 ml-2 mt-2 mb-20 h-1'></div>
                <p className='mb-14 flex items-center justify-start gap-6 text-2xl md:text-3xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">location_on</span><a>Dorrego 446</a></p>
                <p className='mb-14 flex items-center justify-start gap-6 text-2xl md:text-3xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">mail</span><a href="mailto:info@itzeta.com.ar">diyorio@despachantes.com</a></p>
                <p className='mb-14 flex items-center justify-start gap-6 text-2xl md:text-3xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">call</span><a>+54 223 5214743</a></p>
            </div>
            <div className='shadow-2xl'>
                <div id='mapa'>
                    <Image src={mapa} alt='Mapa Diyorio' className='h-full object-cover'/>
                </div>
            </div>
        </div>
        <div className='absolute bottom-2'>
            <div className="w-24 mx-auto mt-8">
                <div onClick={() => {
                    window.scrollTo({
                        left: 0,
                        top: 0
                    })
                }}>
                    <Image src={flecha} alt="Ir abajo" width="30px" height="30px" title="Ir Arriba" className="cursor-pointer rotate-180"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mapa