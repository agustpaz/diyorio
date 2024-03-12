'use client'

import { useEffect, useState } from 'react'

import Loader from '../ui/loader'

import Header from '../ui/home/header'
import Contacto from '../ui/contacto/contacto'
import Footer from '../ui/home/footer'

export default function Home() {

  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  },[]);

  return (
    <>
        <Loader isLoading={isLoading}/>
        <Contacto />
        <Footer />
    </>
  )
}
