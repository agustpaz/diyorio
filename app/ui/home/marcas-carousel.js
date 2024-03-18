'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';

import '@/styles/carousel-styles.css'

import moscuzza from "@/public/assets/images/marcas-logos/moscuzza.svg";
import traweluwn from "@/public/assets/images/marcas-logos/traweluwn.png";
import cruzdelsur from "@/public/assets/images/marcas-logos/cruz-del-sur.png";
import valiparri from "@/public/assets/images/marcas-logos/valiparri.png";
import parquepapas from "@/public/assets/images/marcas-logos/el-parque-papas.svg";
import goodfish from "@/public/assets/images/marcas-logos/good-fish.png";
import asaparri from "@/public/assets/images/marcas-logos/asaparri.jpeg";
import bellini from "@/public/assets/images/marcas-logos/bellini.png";
import buenaVista from "@/public/assets/images/marcas-logos/buena-vista.png";
import fishingGround from "@/public/assets/images/marcas-logos/fishing-ground.jpeg";
import mariscosa from "@/public/assets/images/marcas-logos/mariscosa.gif";
import deliciasMarinas from "@/public/assets/images/marcas-logos/delicias-marinas.png";
import moscuzzaRedes from "@/public/assets/images/marcas-logos/moscuzza-redes.png";
import tecnopesca from "@/public/assets/images/marcas-logos/tecnopesca.png";
import nuevoRumbo from "@/public/assets/images/marcas-logos/nuevo-rumbo.png";
import grupoFenix from "@/public/assets/images/marcas-logos/grupo-fenix.png";
import patagoniaFishing from "@/public/assets/images/marcas-logos/patagonia-fishing.png";
import marPicado from "@/public/assets/images/marcas-logos/mar-picado.png";
import mardi from "@/public/assets/images/marcas-logos/mardi.png";
import santaMaria from "@/public/assets/images/marcas-logos/santa-maria.jpg";
import mineo from "@/public/assets/images/marcas-logos/mineo.svg";
import elDelfin from "@/public/assets/images/marcas-logos/el-delfin.png";
import brewHouse from "@/public/assets/images/marcas-logos/brew-house.png";

const MarcasCarousel = () => {

  // useEffect(() =>{
  //   contarMarcas();
  // });

  // const contarMarcas = () => {
  //   const marcas = document.querySelector('#slider-marcas-1'),
  //   total_marcas = marcas.children.length;
    
  //   document.documentElement.style.setProperty('--total-brand', total_marcas);
  //   for(let i = 0; i < total_marcas; i++) {
  //     marcas.appendChild(marcas.children[i].cloneNode(true));
  //   }
  // }

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
            <li className='brand-logo bg-red-500 px-2'><Image src={mardi} alt='Mardi S.A.'/></li>
            <li className='brand-logo'>Ledipa Mare S.A</li>
            <li className='brand-logo'><Image src={brewHouse} alt='Brew House'/></li>
            <li className='brand-logo px-2'><Image src={marPicado} alt='Mar Picado S.A.'/></li>
            <li className='brand-logo px-2'><Image src={asaparri} alt='Asaparri'/></li>
            <li className='brand-logo'>Pesquera Mar Chiquita S.A</li>
            <li className='brand-logo bg-turquesa-goodfish'><div><Image src={goodfish} alt='Good Fish'/></div></li>
            <li className='brand-logo p-5'><Image src={fishingGround} alt='Fishing Ground'/></li>
            <li className='brand-logo p-5'><Image src={santaMaria} alt='Fishing Ground'/></li>
            <li className='brand-logo'>Congeladores Patagónicos S.A.</li>
            <li className='brand-logo p-5'><Image src={patagoniaFishing} alt='Patagonia Fishing'/></li>
            <li className='brand-logo bg-blue-800 p-2 rounded'><Image src={mariscosa} alt='Mariscos S.A'/></li>
            <li className='brand-logo'>Taturiello S.A</li>
            <li className='brand-logo bg-black p-2 rounded'><Image src={bellini} alt='Bellini'/></li>
            <li className='brand-logo bg-gray-400 p-2 rounded'><Image src={tecnopesca} alt='Tecnopesca'/></li>
            <li className='brand-logo bg-gray-400 p-2 rounded'><Image src={elDelfin} alt='Rafael Cioffi e hijos S.A.'/></li>
            <li className='brand-logo'>Liya S.A</li>
            <li className='brand-logo bg-blue-200 p-2 rounded'><Image src={buenaVista} alt='Buena Vista'/></li>
            <li className='brand-logo bg-black p-2 rounded'><Image src={deliciasMarinas} alt='Delicias Marinas'/></li>
            <li className='brand-logo'>PESQUERA DEL ESTE S.A.</li>
            <li className='brand-logo bg-verde-parque px-2'><Image src={parquepapas} alt='Parque Papas'/></li>
            <li className='brand-logo'><Image src={valiparri} alt='Valiparri'/></li>
            <li className='brand-logo'><Image src={moscuzzaRedes} alt='Moscuzza'/></li>
            <li className='brand-logo'>PESQUERA BUENA VISTA S.A.</li>
            <li className='brand-logo p-5'><Image src={traweluwn} alt='Traweluwn'/></li>
            <li className='brand-logo p-5'><Image src={nuevoRumbo} alt='Cooperativa Nuevo Rumbo'/></li>
            <li className='brand-logo p-16'><Image src={mineo} alt='Mineo'/></li>
            <li className='brand-logo'>Isola Verde S.A.</li>
            <li className='brand-logo bg-gray-400 p-5'><Image src={grupoFenix} alt='Grupo Fenix'/></li>
            <li className='brand-logo bg-blue-200 p-2 rounded'><Image src={moscuzza} alt='Moscuzza'/></li>
            <li className='brand-logo bg-azul-cruzdelsur px-2'><Image src={cruzdelsur} alt='Cruz del Sur'/></li>
            <li className='brand-logo'>Grupo Mattera</li>
          </ul>
          <div className='filtro-slider' onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} data-slider="slider-marcas-1"></div>
        </div>
    </section>
  )
}

export default MarcasCarousel;