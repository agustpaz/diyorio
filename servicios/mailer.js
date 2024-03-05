import axios from "axios";

export default async function enviarEmail(valores, setCargando) {

    const url = "/api/enviarMail";

    const respuesta = await axios.post(url, valores)
        .then(function (response) {
            console.log(response);

            setCargando(false);
            return true;
        })
        .catch(function (error) {
            console.log(error);

            setCargando(false);
            return false;
        });

    return respuesta;
}