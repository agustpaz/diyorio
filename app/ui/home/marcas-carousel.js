'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';

import '@/styles/carousel-styles.css'

import moscuzza from "@/public/assets/images/marcas-logos/moscuzza.svg";
import traweluwn from "@/public/assets/images/marcas-logos/avif/traweluwn.avif";
import cruzdelsur from "@/public/assets/images/marcas-logos/avif/cruz-del-sur.avif";
import valiparri from "@/public/assets/images/marcas-logos/avif/valiparri.avif";
import parquepapas from "@/public/assets/images/marcas-logos/el-parque-papas.svg";
import goodfish from "@/public/assets/images/marcas-logos/avif/good-fish.avif";
import asaparri from "@/public/assets/images/marcas-logos/asaparri.jpeg";
import bellini from "@/public/assets/images/marcas-logos/avif/bellini.avif";
import buenaVista from "@/public/assets/images/marcas-logos/avif/buena-vista.avif";
import fishingGround from "@/public/assets/images/marcas-logos/fishing-ground.jpeg";
import mariscosa from "@/public/assets/images/marcas-logos/mariscosa.gif";
import deliciasMarinas from "@/public/assets/images/marcas-logos/delicias-marinas.png";
import moscuzzaRedes from "@/public/assets/images/marcas-logos/avif/moscuzza-redes.avif";
import tecnopesca from "@/public/assets/images/marcas-logos/avif/tecnopesca.avif";
import nuevoRumbo from "@/public/assets/images/marcas-logos/avif/nuevo-rumbo.avif";
import grupoFenix from "@/public/assets/images/marcas-logos/avif/grupo-fenix.avif";
import patagoniaFishing from "@/public/assets/images/marcas-logos/avif/patagonia-fishing.avif";
import marPicado from "@/public/assets/images/marcas-logos/avif/mar-picado.avif";
import mardi from "@/public/assets/images/marcas-logos/avif/mardi.avif";
import santaMaria from "@/public/assets/images/marcas-logos/santa-maria.jpg";
import mineo from "@/public/assets/images/marcas-logos/mineo.svg";
import elDelfin from "@/public/assets/images/marcas-logos/avif/el-delfin.avif";
import brewHouse from "@/public/assets/images/marcas-logos/brew-house.png";

const MarcasCarousel = () => {

  useEffect(() =>{
    contarMarcas();
  });

  const contarMarcas = () => {
    const marcas = document.querySelector('#slider-marcas-1'),
    total_marcas = marcas.children.length;
    
    document.documentElement.style.setProperty('--total-brand', total_marcas);
    for(let i = 0; i < total_marcas; i++) {
      marcas.appendChild(marcas.children[i].cloneNode(true));
    }
  }

  const mouseEnter = (e) => {
    let slider = document.getElementById(e.target.dataset.slider);
    slider.style.animationPlayState = 'paused';
    
  }

  const mouseLeave = (e) => {
    let slider = document.getElementById(e.target.dataset.slider);
    slider.style.animationPlayState = 'running';
  }

  return (
    <section id="nuestros-clientes" className={`py-20 carousel-background`}>
        <h1 className='text-center text-5xl font-bold mb-20 wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s">Nuestros Clientes <div className='separador-texto bg-verde-400 m-auto w-48 h-2'></div></h1>
        <div className='slider wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.8s">
          <ul id='slider-marcas-1' className='brands'>
            <li className='brand-logo px-2'><img src="/assets/images/marcas-logos/avif/mardi.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Mardi S.A.'/></li>
            <li className='brand-logo'>Ledipa Mare S.A</li>
            <li className='brand-logo'><img src="/assets/images/marcas-logos/brew-house.png" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Brew House'/></li>
            <li className='brand-logo px-2'><img src="/assets/images/marcas-logos/avif/mar-picado.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Mar Picado S.A.'/></li>
            <li className='brand-logo px-2'><Image src={asaparri} alt='Asaparri'/></li>
            <li className='brand-logo'>Pesquera Mar Chiquita S.A</li>
            <li className='brand-logo'><div><img src="/assets/images/marcas-logos/avif/good-fish.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Good Fish'/></div></li>
            <li className='brand-logo p-5'><Image src={fishingGround} alt='Fishing Ground'/></li>
            <li className='brand-logo p-5'><Image src={santaMaria} alt='Santa Maria'/></li>
            <li className='brand-logo'>Congeladores Patagónicos S.A.</li>
            <li className='brand-logo p-5'><img src="/assets/images/marcas-logos/avif/patagonia-fishing.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Patagonia Fishing'/></li>
            <li className='brand-logo bg-blue-800 p-2 rounded'><Image src={mariscosa} alt='Mariscos S.A'/></li>
            <li className='brand-logo'>Taturiello S.A</li>
            <li className='brand-logo bg-black p-2 rounded'><img src="/assets/images/marcas-logos/avif/bellini.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Bellini'/></li>
            <li className='brand-logo bg-gray-400 p-2 rounded'><img src="/assets/images/marcas-logos/avif/tecnopesca.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Tecnopesca'/></li>
            <li className='brand-logo bg-gray-400 p-2 rounded'><img src="/assets/images/marcas-logos/avif/el-delfin.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Rafael Cioffi e hijos S.A.'/></li>
            <li className='brand-logo'>Liya S.A</li>
            <li className='brand-logo bg-black p-2 rounded'><img src="/assets/images/marcas-logos/avif/buena-vista.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Buena Vista'/></li>
            <li className='brand-logo bg-black p-2 rounded'><Image src={deliciasMarinas} alt='Delicias Marinas'/></li>
            <li className='brand-logo'>PESQUERA DEL ESTE S.A.</li>
            <li className='brand-logo bg-verde-parque px-2'><Image src={parquepapas} alt='Parque Papas'/></li>
            <li className='brand-logo'><img src="/assets/images/marcas-logos/avif/valiparri.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Valiparri'/></li>
            <li className='brand-logo'><img src="/assets/images/marcas-logos/avif/moscuzza-redes.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Moscuzza'/></li>
            <li className='brand-logo'>PESQUERA BUENA VISTA S.A.</li>
            <li className='brand-logo p-5'><img src="/assets/images/marcas-logos/avif/traweluwn.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Traweluwn'/></li>
            <li className='brand-logo p-5'><img src="/assets/images/marcas-logos/avif/nuevo-rumbo.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Cooperativa Nuevo Rumbo'/></li>
            <li className='brand-logo p-16'><Image src={mineo} alt='Mineo'/></li>
            <li className='brand-logo'>Isola Verde S.A.</li>
            <li className='brand-logo p-5'><img src="/assets/images/marcas-logos/avif/grupo-fenix.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Grupo Fenix'/></li>
            <li className='brand-logo bg-blue-200 p-2 rounded'><img src="/assets/images/marcas-logos/moscuzza.svg" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Moscuzza'/></li>
            <li className='brand-logo bg-azul-cruzdelsur px-2'><img src="/assets/images/marcas-logos/avif/cruz-del-sur.avif" loading='lazy' width="900px" height="900px" decoding='async' data-nimg="1" style={{color: "transparent"}} alt='Cruz del Sur'/></li>
            <li className='brand-logo'>Grupo Mattera</li>
          </ul>
          <div className='filtro-slider' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} data-slider="slider-marcas-1"></div>
        </div>
    </section>
  )
}

export default MarcasCarousel;