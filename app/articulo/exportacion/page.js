'use client'

import { useEffect, useState } from 'react'

import Loader from '../../ui/loader'

import Footer from '@/app/ui/home/footer';
import Header from '@/app/ui/home/header';
import Articulo from '@/app/ui/articulos/articulo';
import imagen from '@/public/assets/images/barco-exportacion.jpg';

const Page = () => {

  const [ isLoading, setLoading ] = useState(true);
  const lista = ["-	Confección y tramitación de permisos de exportación",
                  "-	Seguimiento de reintegros de exportación. ",
                  "-	Asesoramiento y gestión en regímenes especiales (exportaciones temporales, reembarcos, envíos en consignación entre otros).",
                  "-	Confección de documentación internacional.",
                  "-	Asesoramiento en tratamiento arancelario (derechos de exportación)."];

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
            titulo={"Exportación"}
            lista={lista}
            imagen={imagen}
        />
        <Footer />
    </>
  )
}

export default Page