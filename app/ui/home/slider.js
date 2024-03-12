'use client';

import {useEffect, useState} from 'react';
import Glide, { Controls, Breakpoints, Autoplay } from '@glidejs/glide/dist/glide.modular.esm'
import Image from 'next/image';

const Slider = () => {

    const contenedores = "/assets/images/contenedores.jpg";
    const barcoExportacion = "/assets/images/barco-exportacion.jpg";
    const contenedores2 = "/assets/images/contenedores-maersk.jpg";
    const barcoMar = "/assets/images/mar-barco.jpg";
    const contenedores3 = "/assets/images/contenedores-2.webp";

    useEffect(() => {

        const slider = new Glide(".glide", {
            type: 'carousel',
            autoplay: 3000
        }).mount({ Autoplay });
        
    });
    
    return (
        <section id="galeria" className='h-full w-full'>
            <div className="glide">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides">
                        <li className="glide__slide">
                            <Image width={1000} height={1000} src={contenedores} loading="lazy" className="imagen-slider" alt='Contenedores'/>
                        </li>
                        <li className="glide__slide">
                            <Image width={1000} height={1000} src={barcoExportacion} loading="lazy" className="imagen-slider" alt='Barco de exportacion'/>
                        </li>
                        <li className="glide__slide">
                            <Image width={1000} height={1000} src={contenedores2} loading="lazy" className="imagen-slider" alt='Contenedores Maersk'/>
                        </li>
                        <li className="glide__slide">
                            <Image width={1000} height={1000} src={barcoMar} loading="lazy" className="imagen-slider" alt='Barco de contenedores en el mar'/>
                        </li>
                        <li className="glide__slide">
                            <Image width={1000} height={1000} src={contenedores3} loading="lazy" className="imagen-slider" alt='Contenedores en Aduana'/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Slider;