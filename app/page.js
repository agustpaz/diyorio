"use client"

import { useEffect, useRef, useState } from 'react'

import Header from './ui/home/header'
import Despachantes from './ui/home/despachantes'
import MarcasCarousel from './ui/home/marcas-carousel'
import Nosotros from './ui/home/nosotros'
import QuienesSomos from './ui/home/quienes-somos.js'
import Mapa from './ui/home/mapa'
import Footer from './ui/home/footer'
import Loader from './ui/loader'

import "@/styles/animate.css";
import "@/styles/animate.min.css";

export default function Home() {

  const [ isLoading, setLoading ] = useState(true);

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

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  },[]);

  const scrollToElement = (e, elementId) => {
    e.preventDefault();
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
      <Loader isLoading={isLoading}/>
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
