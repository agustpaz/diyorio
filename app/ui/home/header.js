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
import { titillium } from "@/app/fonts";

import Slider from "./slider";

const Header = ({scrollToElement}) => {

  const currentPage = usePathname();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
      const nav = document.querySelector('#navigation');
      const navLinks = document.querySelectorAll("#navigation a");
      const main = document.getElementById("main");
    
      if(currentPage == "/") {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                nav.classList.add('gradiente-nav');
                cambiarFontSizes(true, navLinks);
            } else {
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

      setTimeout(() => {
        main.classList.add("escalar")
      }, 500)
    }
  });

  const cambiarFontSizes = (add, navLinks) => {

      if(add == true) {
          navLinks.forEach((link) => {
            if(link.id != "logo-entero") {
              link.classList.add("texto-chico");
            }
          });
      } else {
          navLinks.forEach((link) => {
            if(link.id != "logo-entero") {
              link.classList.remove("texto-chico");
            }
          });
      }

  }

  return (
  <header className="w-full relative overflow-hidden">
    {currentPage == "/" ? (
        <>
        <div className="filtro">
            <div className="flex items-center gap-28 justify-center mt-40">
                <div className="font-bold tracking-widest wow fadeInUp">
                  <div>
                    <h2 className={`${homeStyles.titulo_con_sombra} text-4xl md:text-5xl font-semibold leading-normal text-white titulo text-center`} data-wow-duration="0.5s" data-wow-delay="0.2s">La experiencia al servicio</h2>
                    <h2 className={`${homeStyles.titulo_con_sombra} text-4xl md:text-5xl font-semibold leading-normal mb-12 text-white titulo text-center`} data-wow-duration="0.5s" data-wow-delay="0.2s"> del comercio exterior</h2>
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
            </div>
        </div>
        <div id="main">
            <Slider />
        </div></> ) : (
            null
        )
    }
    <nav id="navigation" className={`flex items-center justify-between text-xl py-2 px-10 sm:px-28 sm:py-2 inset-x-0 top-0 w-full ${titillium.className} uppercase text-white font-semibold transition-all ease-in-out duration-300 ${currentPage == "/" ? "fixed" : "bg-black/90"} wow fadeInDown`}>
        <Link href="/" id="logo-entero">
            <div className="flex flex-col justify-center">
                <Image
                    id="imagen-logo"
                    src={logoDiyorio}
                    alt="Promptopia Logo"
                    className={`ml-20 mt-3 animated logo`}
                    priority
                />
                <div>
                    <div id="diyorio" className="-mt-4 text-center text-3xl sm:text-5xl font-inter font-extrabold transition-all ease-in-out duration-500">DI YORIO</div>
                    <div id="despachantes" className="-mt-6 text-center text-lg font-inter font-normal transition-all ease-in-out duration-500">Despachantes de Aduana</div>
                </div>
            </div>
        </Link>


        <div className="sm:flex space-x-4 hidden tracking-widest">
          <div className="flex gap-3 md:gap-5">
            <Link 
                href="/"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 "
            >
                Inicio
            </Link>

            {currentPage === "/" ? (
            <Link 
                onClick={(e) => scrollToElement(e,'quienes-somos')}
                href={""}
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 scroll-link"
            >
                Nosotros
            </Link>
            ) : (
            <Link 
                href="/#quienes-somos"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 scroll-link"
            >
                Nosotros
            </Link>
            )}

            {currentPage === "/" ? (
            <Link 
                onClick={(e) => scrollToElement(e,'despachantes-servicios')}
                href={""}
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 scroll-link"
            >
                Servicios
            </Link>
            ) : (
            <Link 
                href="/#despachantes-servicios"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 scroll-link"
            >
                Servicios
            </Link>
            )}
            
            {currentPage === "/" ? (
            <Link 
                onClick={(e) => scrollToElement(e,'nuestros-clientes')}
                href={""}
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 scroll-link"
            >
                Nuestros Clientes
            </Link>
            ) : (
            <Link 
                href="/#nuestros-clientes"
                className="hover:bg-azul-cruzdelsur transition-all ease-in-out duration-500 p-4 py-10 scroll-link"
            >
                Nuestros Clientes
            </Link>
            )}
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


                        {currentPage === "/" ? (
                        <Link 
                            onClick={(e) => scrollToElement(e,'quienes-somos')}
                            href={""}
                            className="dropdown_link text-black"
                        >
                            Nosotros
                        </Link>
                        ) : (
                        <Link 
                            href="/#quienes-somos"
                            className="dropdown_link text-black"
                        >
                            Nosotros
                        </Link>
                        )}
                        
                        {currentPage === "/" ? (
                        <Link 
                            onClick={(e) => scrollToElement(e,'despachantes-servicios')}
                            href={""}
                            className="dropdown_link text-black"
                        >
                            Servicios
                        </Link>
                        ) : (
                        <Link 
                            href="/#despachantes-servicios"
                            className="dropdown_link text-black"
                        >
                            Servicios
                        </Link>
                        )}

                        {currentPage === "/" ? (
                        <Link 
                            onClick={(e) => scrollToElement(e,'nuestros-clientes')}
                            href={""}
                            className="dropdown_link text-black"
                        >
                            Nuestros Clientes
                        </Link>
                        ) : (
                        <Link 
                            href="/#nuestros-clientes"
                            className="dropdown_link text-black"
                        >
                            Nuestros Clientes
                        </Link>
                        )}
                        
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