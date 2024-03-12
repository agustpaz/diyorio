'use client'

import React from 'react';

import Image from 'next/image';

import flecha from "@/public/assets/images/iconos/flecha-negra.png";
import mapa from "@/public/assets/images/diyorio-mapa.png"
import 'material-icons/iconfont/material-icons.css'
import "@/styles/mapa.css"; 

const Mapa = () => {
  return (
    <section className='pt-20 pb-24 px-10 sm:p-16 sm:pb-28 relative'>
        <div className='lg:grid lg:grid-cols-2 gap-x-10 wow fadeInRight'>
            <div className='sm:px-24 sm:py-24 sm:shadow-2xl'>
                <h1 className='text-3xl text-4xl xl:text-5xl font-semibold'>Donde encontrarnos</h1>
                <div className='separador-texto bg-azul-cruzdelsur w-1/4 ml-2 mt-2 mb-20 h-1'></div>
                <p className='mb-14 flex items-center justify-start gap-6 text-xl md:text-2xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">location_on</span><a>Av. Buque Pesquero Dorrego 446</a></p>
                <p className='mb-14 flex items-center justify-start gap-6 text-xl md:text-2xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">mail</span><a href="mailto:info@itzeta.com.ar">micaela@diyoriocomex.com</a></p>
                <p className='mb-14 flex items-center justify-start gap-6 text-xl md:text-2xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">call</span><a href="tel:+54 9 2234 55-4760">+54 0223 5214743</a></p>
                <p className='mb-14 flex items-center justify-start gap-6 text-xl md:text-2xl font-normal italic'><span className="material-icons iconos-mapa text-azul-cruzdelsur">phone_iphone</span><a href="tel:+54 9 2234 55-4760">+54 0223 480 1810</a></p>
            </div>
            <div className='shadow-2xl'>
                <div id='mapa'>
                    <Image src={mapa} alt='Mapa Diyorio' className='h-full object-cover'/>
                </div>
            </div>
        </div>
        <div className='absolute bottom-2'>
            <div className="w-24 mx-auto mt-8 p-6 transition-all ease-in-out duration-200 bg-gray-200 hover:bg-gray-300 hover:scale-105 rounded-full cursor-pointer"
                onClick={() => {
                    window.scrollTo({
                        left: 0,
                        top: 0
                    })
                }}    
            >
                <Image src={flecha} alt="Ir abajo" width="30px" height="30px" title="Ir Arriba" className="rotate-180"/>
            </div>
        </div>
    </section>
  )
}

export default Mapa