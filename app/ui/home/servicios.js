import React from 'react'
import Link from 'next/link'

const Servicios = () => {
  return (
    <article className={`w-full relative z-20`} >
      <div className="w-full h-full grid lg:grid-cols-3 gap-16 p-20">
        <Link href={"/articulo/importacion"} target='blank'>
          <div className={`card`}>
            <div className='w-full h-full flex justify-center items-center card-content'>
              <h3 className='titulo-card text-4xl font-normal tracking-wide text-center uppercase'>
                Importacion
                {/* <div className='separador-texto bg-azul-cruzdelsur m-auto w-20 h-1'></div> */}
                <div className='flex justify-center h-24'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M754-324 120-500v-220l60 20 28 84 192 54v-318l80 20 110 350 200 56q23 6 36.5 24.5T840-388q0 33-27 53t-59 11ZM120-120v-80h720v80H120Z"/></svg></div>
              </h3>
            </div>
            <div className="card-description">
              <div className='w-full h-full flex flex-col justify-center items-center text-1xl'>
                <p className='text-center'>- Confección y tramitación de permisos de embarque de exportación.</p>
                <p className='text-center'>- Seguimiento de reintegros de exportación.</p>
                <p className='text-center'>- Asesoramiento y gestión en regímenes especiales (exportaciones temporales, reembarcos, envíos en consignación entre otros).</p>
                <p className='text-center'>- Confección de documentación internacional.</p>
                <p className='text-center'>- Asesoramiento en tratamiento arancelario (derechos de exportación).</p>
              </div>
            </div>
          </div>
        </Link>

        <Link href={"/articulo/exportacion"} target='blank'>
        <div className={`card`}>
          <div className={`w-full h-full flex justify-center items-center card-content`}>
            <h3 className='titulo-card text-4xl font-normal tracking-wide text-center uppercase'>
              Exportacion
              <div className='flex justify-center h-24'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-120v-80h720v80H120Zm74-200L80-514l62-12 70 62 192-52-162-274 78-24 274 246 200-54q32-9 58 12t26 56q0 22-13.5 39T830-492L194-320Z"/></svg></div>
              {/* <div className='separador-texto bg-azul-cruzdelsur m-auto w-20 h-1'></div> */}
            </h3>
          </div>
          <div className="card-description">
            <div className='w-full h-full flex flex-col justify-center items-center text-1xl'>
              <p className='text-center'>- Confección y tramitación de permisos de embarque de exportación.</p>
              <p className='text-center'>- Seguimiento de reintegros de exportación.</p>
              <p className='text-center'>- Asesoramiento y gestión en regímenes especiales (exportaciones temporales, reembarcos, envíos en consignación entre otros).</p>
              <p className='text-center'>- Confección de documentación internacional.</p>
              <p className='text-center'>- Asesoramiento en tratamiento arancelario (derechos de exportación).</p>
            </div>
          </div>
        </div>
        </Link>

        <Link href={"/articulo/especiales"} target='blank'>
        <div className={`card`}>
          <div className='w-full h-full flex justify-center items-center card-content'>
            <h3 className='titulo-card text-4xl font-normal tracking-wide text-center uppercase'>
              Servicios Especiales
              <div className='flex justify-center h-24'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg></div>
              {/* <div className='separador-texto bg-azul-cruzdelsur m-auto w-20 h-1'></div> */}
            </h3>
          </div>
          <div className="card-description">
            <div className='w-full h-full flex flex-col justify-center items-center text-1xl'>
              <p className='text-center'>- Confección y tramitación de permisos de embarque de exportación.</p>
              <p className='text-center'>- Seguimiento de reintegros de exportación.</p>
              <p className='text-center'>- Asesoramiento y gestión en regímenes especiales (exportaciones temporales, reembarcos, envíos en consignación entre otros).</p>
              <p className='text-center'>- Confección de documentación internacional.</p>
              <p className='text-center'>- Asesoramiento en tratamiento arancelario (derechos de exportación).</p>
            </div>
          </div>
        </div>
        </Link>
    </div>
  </article>
  )
}

export default Servicios