'use client'

import Image from "next/image"
import logoDiyorio from "@/public/assets/images/logoDiyorio-mejorado.png";
import flechaAbajo from "@/public/assets/images/iconos/flecha.png"
import hamburguesaBlanca from "@/public/assets/images/iconos/hamburguesa-blanca.png"

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from 'next/navigation'

import 'animate.css/animate.min.css';

import homeStyles from "./home.module.css";
import { noto } from "@/app/fonts";

const Header = () => {

  const currentPage = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
      const nav = document.querySelector('#navigation');
      const logo = document.querySelector('#imagen-logo');
      const navLinks = document.querySelectorAll("#navigation a");
    
      if(currentPage == "/") {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                logo.classList.add('logo-chico');
                nav.classList.add('gradiente-nav');
                cambiarFontSizes(true, navLinks);
            } else {
                logo.classList.remove('logo-chico');
                nav.classList.remove('gradiente-nav');
                cambiarFontSizes(false, navLinks);
            }
        };
    
  
      window.addEventListener('scroll', handleScroll);

      const scrollLinks = document.querySelectorAll('.scroll-link');

      // Agrega un evento click a cada enlace
      scrollLinks.forEach(anchor => {
          anchor.addEventListener('click', function(e) {
              e.preventDefault();

              // Obtiene el id de la sección de destino
              const targetId = this.getAttribute('href').substring(1);
              const targetElement = document.getElementById(targetId);

              if (targetElement) {
              // Realiza el desplazamiento suave
              targetElement.scrollIntoView({
                  behavior: 'smooth'
              });
              }
          });
      });
    }
  });

  const cambiarFontSizes = (add, navLinks) => {

      if(add == true) {
          navLinks.forEach((link) => {
              link.classList.add("texto-chico");
          });
      } else {
          navLinks.forEach((link) => {
              link.classList.remove("texto-chico");
          });
      }

  }

  return (
  <header className="w-full relative">
    {currentPage == "/" ? (
        <>
        <div className="filtro">
            <div className="flex items-center gap-28 justify-center mt-48">
                <div className="font-bold tracking-widest wow fadeIn">
                  <div className={noto.className}>
                    <h2 className={`${homeStyles.titulo_con_sombra} text-4xl md:text-5xl font-semibold leading-normal text-white titulo text-center`} data-wow-duration="0.5s" data-wow-delay="0.2s">Nos hacemos cargo</h2>
                    <h2 className={`${homeStyles.titulo_con_sombra} text-4xl md:text-5xl font-semibold mb-12 text-white titulo text-center`} data-wow-duration="0.5s" data-wow-delay="0.2s">de tus pedidos</h2>
                  </div>
                  <div className="flex justify-center p-6">
                    <Link href="/contacto" target="blank">
                        <button className="px-12 py-4 text-white text-2xl bg-verde-300 hover:bg-gris hover:text-black transition-all ease-in-out duration-200 rounded-xl">Contactanos</button>
                    </Link>
                  </div>
                  <div className="w-24 mx-auto mt-8">
                    <div onClick={() => {
                        window.scrollBy({
                            top: window.innerHeight,
                            behavior: "smooth"
                        })
                    }}>
                        <Image src={flechaAbajo} alt="Ir abajo" width="30px" height="30px" title="Ir Abajo" className="cursor-pointer"/>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <Image
                    src={logoDiyorio}
                    alt="Promptopia Logo"
                    className="object-contain my-3 animated"
                    width={350}
                    height={500}
                  />
                </div> */}
            </div>
        </div>
        <div className="main">
            
        </div></> ) : (
            <></>
        )
    }
    <nav id="navigation" className={`flex items-center text-2xl font-normal tracking-wide justify-around py-14 sm:px-10 sm:py-8 inset-x-0 top-0 w-full text-white transition-all ease-in-out duration-300 ${currentPage == "/" ? "fixed" : "bg-black/90 texto-chico"}`}>
        <Link href="/" className={`flex items-center ${currentPage == "/" ? "text-2xl sm:text-5xl" : "text-2xl"} font-inter`} >
            <Image
                id="imagen-logo"
                src={logoDiyorio}
                alt="Promptopia Logo"
                className={`object-contain my-3 logo animated ${currentPage.includes("/articulo") ? "logo-chico" : ""}`}
                width={110}
            />
            I YORIO
        </Link>


        <div className="sm:flex space-x-4 hidden tracking-wider">
          <div className="flex gap-3 md:gap-5">
            <Link 
                href="/"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-200 p-4 py-10 "
            >
                Inicio
            </Link>
            {currentPage == "/" ? (
            <>
            <Link 
                href="#nosotros"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-200 p-4 py-10 scroll-link"
            >
                Nosotros
            </Link>
            <Link 
                href="#empresas"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-200 p-4 py-10 scroll-link"
            >
                Nuestros Clientes
            </Link></>) : <></>
            }
          </div>
        </div>

        <div className="md:hidden flex space-x-4 relative">
            <div className="flex">
                <Image 
                    src={hamburguesaBlanca}
                    width={80}
                    height={80}
                    alt="Profile"
                    onClick={() => setToggleDropdown((prev) => !prev)}
                />
                {toggleDropdown && (
                    <div className="dropdown">
                        <Link 
                            href="/"
                            className="dropdown_link text-black"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Inicio
                        </Link>
                        {currentPage == "/" ? (
                        <>
                        <Link 
                            href="#quienes-somos"
                            className="dropdown_link text-black"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Nosotros
                        </Link>
                        <Link 
                            href="#nuestros-clientes"
                            className="dropdown_link text-black"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Nuestros Clientes
                        </Link> </> ) : <></>
                        }
                        <Link 
                            href="/contacto"
                            target="blank"
                            className="dropdown_link w-full text-center bg-beige-oscuro text-white bg-verde-300 hover:bg-gris hover:text-black transition-all ease-in-out duration-200 p-2 rounded-xl"
                            onClick={() => setToggleDropdown(false)}
                        >
                            Contactanos
                        </Link>
                    </div>
                )}
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header