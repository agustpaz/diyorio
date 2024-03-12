'use client'

import { useEffect, useState } from 'react'

import Loader from '../../ui/loader'

import Footer from '@/app/ui/home/footer';
import Header from '@/app/ui/home/header';
import Articulo from '@/app/ui/articulos/articulo';
import imagen from '@/public/assets/images/contenedores-tarde.jpg';

const Page = () => {

  const [ isLoading, setLoading ] = useState(true);
  const lista = ["-	Sistema de Importaciones de la Republica Argentina (SIRA).",
                  "-	Confección y tramitación de despachos de importación.",
                  "-	Asesoramiento y gestión en regímenes especiales (importaciones temporales, reimportaciones, entre otros).",
                  "-	Asesoramiento en tratamiento arancelario, aranceles preferenciales y excepciones."];

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  },[]);

  return (
    <>
        <Loader isLoading={isLoading}/>
        <Header />
        <Articulo 
            titulo={"Mi titulo"}
            lista={lista}
            imagen={imagen}
        />
        <Footer />
    </>
  )
}

export default Page