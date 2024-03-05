import homeStyles from "./home.module.css";
import logo from "@/public/assets/images/logoDiyorio-mejorado.png";
import Image from "next/image";
import { roboto } from "@/app/fonts";

const Nav = () => {
  return (
    <nav className={`${homeStyles.nav} ${roboto.className} flex justify-evenly p-8 bg-gray-900 text-white`}>
        <div className="flex items-center">
            <Image
                src={logo}
                alt="Logo"
                width={700}
            />
            <h1 className="font-bold">DI YORIO</h1>
        </div>
        <div className="flex gap-4 text-4xl">
            <div className="flex flex-col justify-center">
                <a>Nosotros</a>
            </div>
            <div className="flex flex-col justify-center">
                <a>Servicios</a>
            </div>
            <div className="flex flex-col justify-center">
                <a>Contacto</a>
            </div>
        </div>
        <div>
            Redes
        </div>
    </nav>
  )
}

export default Nav