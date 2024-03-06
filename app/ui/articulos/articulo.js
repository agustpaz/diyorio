import React from 'react'

import Image from 'next/image'

const Articulo = ({titulo, contenido, imagen}) => {
  return (
    <article className='px-28 py-16'>
        <h1 className='text-6xl mb-10 text-center'>{titulo} <div className='separador-texto m-auto bg-verde-100 w-48 h-1'></div></h1>
        <p className='mt-10 text-2/2xl mb-20 text-justify'>{contenido}</p>
        <div className='w-full flex justify-center'>
            <Image src={imagen} alt='Imagen Articulo'/>
        </div>
    </article>
  )
}

export default Articulo