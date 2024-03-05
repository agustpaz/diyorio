export default function validarMensaje(valores) {
    
    let errores = {};

    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio";
    } else if(!/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/u.test(valores.nombre)) {
        errores.nombre = "El nombre no es valido";
    }

    if(!valores.apellido) {
        errores.apellido = "El apellido es obligatorio";
    } else if(!/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ\s]+$/u.test(valores.apellido)) {
        errores.apellido = "El apellido no es valido";
    }

    if(!valores.email) {
        errores.email = "El email es obligatorio";
    } /*else if(!/^[A-Z0-9._%+-]+@[A-Z]{2,20}$/i.test(valores.email)) {
        errores.email = "Email no valido";
    }*/

    if(!valores.asunto) {
        errores.asunto = "El asunto es obligatorio";
    }

    if(!valores.mensaje) {
        errores.mensaje = "El mensaje es obligatorio";
    }

    return errores;
}
