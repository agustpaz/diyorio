import React from 'react'

import Image from 'next/image'

const Articulo = ({titulo, lista, imagen}) => {

  return (
    <article className='px-10 sm:px-48 py-16'>
      <h1 className='text-6xl mb-10 text-center'>{titulo} <div className='separador-texto m-auto mt-4 bg-verde-100 w-48 h-1'></div></h1>
      <ul className='mt-10 text-2/2xl sm:text-2xl mb-20 text-justify'>
        {lista.map((value) => 
          <li key={value}>{value}</li>
        )}
      </ul>
      <div className='w-full flex justify-center'>
        <Image src={imagen} alt='Imagen Articulo'/>
      </div>
    </article>
  )
}

export default Articulo