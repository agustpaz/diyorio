'use client'

// components/Loader.js
import React, { useEffect } from 'react';
import Image from 'next/image';

import styles from './home/loader.module.css';

import logoDiyorio from "@/public/assets/images/logoDiyorio-mejorado.png";

const Loader = ({ isLoading }) => {

  useEffect(() => {
    const loader = document.querySelector("#loader");
    loader.classList.add(styles.transladar_loader);
  })

  return (
    <div id='loader' className={`${styles.loader} ${isLoading ? styles.show : ''}`}>
        <div className="flex flex-col justify-center">
            <Image
                id="imagen-logo"
                src={logoDiyorio}
                alt="Promptopia Logo"
                className={`ml-16 sm:ml-20 mt-3 animated logo`}
                priority
            />
            <div>
                <div id="diyorio" className="-mt-3 sm:-mt-4 text-center text-4xl text-white sm:text-5xl font-inter font-extrabold transition-all ease-in-out duration-500">DI YORIO</div>
                <div id="despachantes" className="-mt-6 text-center text-lg text-white font-inter font-normal transition-all ease-in-out duration-500">Despachantes de Aduana</div>
            </div>
        </div>
    </div>
  );
};

export default Loader;