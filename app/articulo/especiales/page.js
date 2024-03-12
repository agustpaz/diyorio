'use client'

import { useEffect, useState } from 'react'

import Loader from '../../ui/loader'

import Footer from '@/app/ui/home/footer';
import Header from '@/app/ui/home/header';
import Articulo from '@/app/ui/articulos/articulo';
import imagen from '@/public/assets/images/diyorio.jpg';

const Page = () => {
  
  const [ isLoading, setLoading ] = useState(true);
  const lista = ["-	Tramite de inscripción como importador/exportador.",
                "-	Clasificación arancelaria, análisis de costos, aranceles y presupuestos.",
                "-	Contratación de fletes. Reserva en buques. Servicio logístico internacional integrado.",
                "-	Tramitación ante terceros organismos. (INAL, ANMAT, SENASA, entre otros).",
                "-	 Manejo de plataforma TAD","-	 Asesoramiento normativo y requisitos sobre la mercadería a comercializar.",
                "-	Coordinamos y supervisamos de forma presencial todas nuestras operaciones."];

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  },[]);

  return (
    <>
        <Loader isLoading={isLoading}/>
        <Header />
        <Articulo 
            titulo={"Servicios Integrales"}
            lista={lista}
            imagen={imagen}
        />
        <Footer />
    </>
  )
}

export default Page