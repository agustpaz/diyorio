import React from 'react'

import Footer from '@/app/ui/home/footer';
import Header from '@/app/ui/home/header';
import Articulo from '@/app/ui/articulos/articulo';
import imagen from '@/public/assets/images/diyorio.jpg';

const Page = () => {
  return (
    <>
        <Header />
        <Articulo 
            titulo={"Servicios Especiales"}
            contenido={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultricies rutrum sem quis aliquet. Donec efficitur, nisi at rutrum luctus, turpis eros mattis enim, vestibulum eleifend ex libero in metus. Pellentesque pulvinar posuere ligula, eget varius nisl. Integer id tincidunt neque. Mauris ipsum orci, blandit sed ligula a, pharetra cursus dolor. Cras aliquet consequat lorem vitae consectetur. Aliquam erat volutpat. Sed sem tortor, imperdiet in est imperdiet, iaculis euismod augue. Pellentesque ac molestie enim. Phasellus sollicitudin scelerisque nisi nec pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae blandit tellus. Phasellus dictum tempor tellus non volutpat. Aliquam efficitur pulvinar maximus. In non turpis vel est pharetra iaculis. Duis id felis leo. Phasellus sed luctus ligula. Nulla sodales eget ex ac varius. Aliquam erat volutpat. In fringilla ligula mi, ut mattis mi tempor id. Integer dictum et ipsum nec faucibus. Sed quis vulputate quam. In elementum posuere tempor. Proin ante quam, finibus in iaculis vel, pharetra a nisi. Duis sapien neque, viverra convallis condimentum ut, cursus sed lacus. Phasellus id consequat enim. Maecenas convallis eleifend tortor ut luctus. Fusce quis posuere magna. Nullam placerat tincidunt ipsum eu facilisis. Morbi quis risus tincidunt, fringilla urna ac, fermentum magna."}
            imagen={imagen}
        />
        <Footer />
    </>
  )
}

export default Page