'use client'

import React, {createContext, useState, useEffect} from 'react';

export const PopupContext = createContext();

const PopupProvider = (props) => {

    const [estadoPopup, setEstadoPopup] = useState(false);

    useEffect(() => {
        
    }, [estadoPopup])

    return (
        <PopupContext.Provider
            value={{
                estadoPopup,
                setEstadoPopup
            }}
        >
            {props.children}
        </PopupContext.Provider>
    );
}

export default PopupProvider;