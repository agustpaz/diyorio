import axios from "axios";

export default async function enviarEmail(valores, setCargando) {

    const url = "/api/enviarMail";

    const respuesta = await axios.post(url, valores)
        .then(function (response) {

            setCargando(false);
            return true;
        })
        .catch(function (error) {

            setCargando(false);
            return false;
        });

    return respuesta;
}