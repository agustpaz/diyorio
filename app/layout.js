import { roboto, montserrat, noto } from '@/app/fonts'
import './globals.css'
import '@/styles/globals.css'
import PopupContext from "@/context/popup-context";

import Footer from './ui/home/footer';

export const metadata = {
  title: '| Despachantes de Aduana',
  description: 'Diyorio, despachantes de aduana.',
}

export default function RootLayout({ children }) {
  return (
    <PopupContext>
      <html lang="en">
        <body className={noto.className}>{children}</body>
      </html>
    </PopupContext>
  )
}
