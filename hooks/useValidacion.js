'use client'

import { useState, useEffect, useContext } from 'react';
import { PopupContext } from '@/context/popup-context';

const useValidacion = (stateInicial, validar, func, setMensajePopup) => {
    
    const [valores, guardarValores] = useState(stateInicial);
    const [errores, guardarErrores] = useState({});
    const [submitForm, guardarSubmitForm] = useState(false);
    const [cargando, setCargando] = useState(false);

    const { estadoPopup, setEstadoPopup } = useContext(PopupContext);

    useEffect(() => {
        if(submitForm) {
            const noErrores = Object.keys(errores).length === 0;

            if(noErrores) {
                setCargando(true);

                handlePopup();
            }

            guardarSubmitForm(false);
        }
    }, [submitForm])

    //Funcion que se ejecuta conforme el usuario escribe algo
    const handleChange = e => {
        guardarValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }

    //Funcion que se ejecuta cuando el usuario hace submit
    const handleSubmit = e => {
        e.preventDefault();

        const erroresValidacion = validar(valores);

        guardarErrores(erroresValidacion);

        guardarSubmitForm(true);
        
    }

    const handlePopup = async () => {

        const respuesta = await func(valores, setCargando);

        if(!respuesta) {
            setMensajePopup("Ha ocurrido un error, por favor intente mas tarde.")
            setEstadoPopup(true);
        } else if(respuesta) {
            setMensajePopup("Mensaje enviado correctamente.");
            setEstadoPopup(true);
        }
    }

    return {valores, errores, submitForm, cargando, handleChange, handleSubmit};
}
 
export default useValidacion;