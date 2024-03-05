import React from 'react'

import Image from 'next/image'

const Articulo = ({titulo, contenido, imagen}) => {
  return (
    <article className='px-28 py-16'>
        <h1 className='text-6xl mb-10'>{titulo} <div className='separador-texto bg-verde-100 w-48 h-1'></div></h1>
        <p className='mt-10 text-2/2xl mb-20'>{contenido}</p>
        <div className='w-full flex justify-center'>
            <Image src={imagen} alt='Imagen Articulo'/>
        </div>
    </article>
  )
}

export default Articulo