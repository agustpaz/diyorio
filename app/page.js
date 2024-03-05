import Header from './ui/home/header'
import Despachantes from './ui/home/despachantes'
import MarcasCarousel from './ui/home/marcas-carousel'
import Nosotros from './ui/home/nosotros'
import QuienesSomos from './ui/home/quienes-somos.js'
import Mapa from './ui/home/mapa'
import Footer from './ui/home/footer'

export default function Home() {
  return (
    <>
      <Header />
      <Nosotros />
      <QuienesSomos />
      <Despachantes />
      {/* <MarcasCarousel /> */}
      <MarcasCarousel />
      <Mapa />
      <Footer />
    </>
  )
}
