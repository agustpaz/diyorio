"use client"

import { useEffect, useRef } from 'react'

import Header from './ui/home/header'
import Despachantes from './ui/home/despachantes'
import MarcasCarousel from './ui/home/marcas-carousel'
import Nosotros from './ui/home/nosotros'
import QuienesSomos from './ui/home/quienes-somos.js'
import Mapa from './ui/home/mapa'
import Footer from './ui/home/footer'

import "@/styles/animate.css";
import "@/styles/animate.min.css";

export default function Home() {


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Solo inicializa Wow.js en el navegador
      const WOW = require('wowjs');
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();

      wow.sync();
    }

  },[]);

  const scrollToElement = (elementId) => {
    console.log(elementId)
    const element = document.getElementById(elementId);
    if (element) {
      const scrollY = element.getBoundingClientRect().top + window.scrollY - 80;;
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header scrollToElement={scrollToElement} />
      <Nosotros />
      <QuienesSomos />
      <Despachantes />
      <MarcasCarousel />
      <Mapa />
      <Footer />
    </>
  )
}
