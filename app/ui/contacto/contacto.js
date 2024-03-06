'use client'

import { useState, useEffect } from "react";

import Popup from './popup.js';
import Spinner from "../spinner.js";

import useValidacion from '/hooks/useValidacion';
import validarMensaje from '/validacion/validarMensaje';
import enviarEmail from '/servicios/mailer';

import 'animate.css/animate.min.css';
import '@/styles/inputs.css'
import '@/styles/contacto.css'

const STATE_INICIAL = {
  nombre: "",
  apellido: "",
  email: "",
  asunto: "",
  mensaje: ""
}

const Contacto = () => {

  const anchoIcono = {
    "fontSize": "20px"
  }
  
  const [mensajePopup, setMensajePopup] = useState("");
  const {errores, cargando, handleChange, handleSubmit} = useValidacion(STATE_INICIAL, validarMensaje, enviarEmail, setMensajePopup);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Solo inicializa Wow.js en el navegador
      const WOW = require('wowjs');
      const wow = new WOW.WOW();
      wow.init();

      wow.sync();
    }
  },[]);

  return (
    <section>
      
      {cargando == true ? 
        <div className='spinner-wrapper'>
            <Spinner />
        </div>
              :
        null
      }
      <Popup 
          mensaje={mensajePopup}
      />
      <div id='contacto' className='sm:grid sm:grid-cols-2'>
        <form
          onSubmit={handleSubmit}
          className="background-footer"
        >
          <div className="flex flex-col h-full justify-center items-center px-16 py-10 sm:px-36 sm:py-0">
            <div className="wow fadeIn sm:mb-10" data-wow-duration="0.9s" data-wow-delay="0.2s">
              <h1 className='text-5xl font-semibold text-black tracking-wide text-center'>Contactanos</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 w-full'>
              <div className='form__group field wow fadeInUp' data-wow-duration="0.9s" data-wow-delay="0.2s">
                <input 
                  type="input"
                  className="form__field"
                  onChange={handleChange}
                  placeholder="Nombre"
                  name="nombre"
                  id='nombre'
                />
                <label htmlFor="nombre" className="form__label">Nombre</label>
                {errores.nombre ?
                  <div className="flex gap-2 items-center text-red-500"><i className="material-symbols-outlined" style={anchoIcono}>error</i><span className="text-sm">{errores.nombre}</span></div>
                : 
                  null }
              </div>
              <div className='form__group field wow fadeInUp' data-wow-duration="0.9s" data-wow-delay="0.3s">
                <input 
                  type="input"
                  className="form__field"
                  onChange={handleChange}
                  placeholder="Apellido"
                  name="apellido"
                  id='apellido'
                />
                <label htmlFor="apellido" className="form__label">Apellido</label>
                {errores.apellido ?
                  <div className="flex gap-2 items-center text-red-500"><i className="material-symbols-outlined" style={anchoIcono}>error</i><span className="text-sm">{errores.apellido}</span></div>
                : 
                  null }
              </div>
            </div>
            <div className='form__group field w-full wow fadeInUp' data-wow-duration="0.9s" data-wow-delay="0.4s">
              <input 
                type="input"
                className="form__field"
                onChange={handleChange}
                placeholder="Email"
                name="email"
                id='email'
              />
              <label htmlFor="email" className="form__label">Email</label>
              {errores.email ?
                  <div className="flex gap-2 items-center text-red-500"><i className="material-symbols-outlined" style={anchoIcono}>error</i><span className="text-sm">{errores.email}</span></div>
                : 
                  null }
            </div>
            <div className='form__group field w-full wow fadeInUp' data-wow-duration="0.9s" data-wow-delay="0.5s">
              <input 
                type="input"
                className="form__field"
                onChange={handleChange}
                placeholder="Asunto"
                name="asunto"
                id='asunto'
              />
              <label htmlFor="asunto" className="form__label">Asunto</label>
              {errores.asunto ?
                  <div className="flex gap-2 items-center text-red-500"><i className="material-symbols-outlined" style={anchoIcono}>error</i><span className="text-sm">{errores.asunto}</span></div>
                : 
                  null }
            </div>
            <div className='form__group field w-full wow fadeInUp' data-wow-duration="0.9s" data-wow-delay="0.6s">
              <input 
                type="input"
                className="form__field"
                onChange={handleChange}
                placeholder="Mensaje"
                name="mensaje"
                id='mensaje'
              />
              <label htmlFor="mensaje" className="form__label">Mensaje</label>
              {errores.mensaje ?
                  <div className="flex gap-2 items-center text-red-500"><i className="material-symbols-outlined" style={anchoIcono}>error</i><span className="text-sm">{errores.mensaje}</span></div>
                : 
                  null }
            </div>
            <div className="w-full mt-16 wow fadeInUp" data-wow-duration="0.9s" data-wow-delay="0.7s">
              <button 
                  href="/contacto"
                  type="submit"
                  className="dropdown_link px-12 m-auto text-center bg-beige-oscuro text-white bg-beige-400 hover:bg-gris hover:text-black transition-all ease-in-out duration-200 p-4 rounded-md"
              >
                  Enviar
              </button>
            </div>
          </div>
        </form>
        <div id='banner-contacto' className='h-full'>
          <div className='w-full h-full'></div>
        </div>
      </div>
    </section>
  )
}

export default Contacto