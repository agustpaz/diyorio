import React, { useContext } from 'react';
import { PopupContext } from '@/context/popup-context';

import "@/styles/popup.css";

const Popup = ({mensaje}) => {

    const { estadoPopup, setEstadoPopup } = useContext(PopupContext);

    if(!estadoPopup) return null;

    const cerrarPopup = () => {

        setEstadoPopup(false);
    }

    return (
        <div id="popup">
            <div className='ventana'>
                <h3>{mensaje}</h3>
                <button onClick={cerrarPopup}>Cerrar</button>
            </div>
        </div>
    );
}
 
export default Popup;
