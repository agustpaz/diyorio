import { Roboto, Montserrat, Inter, Noto_Sans, Titillium_Web } from 'next/font/google'

export const roboto = Roboto({subsets: ['latin'], weight: ['400','700']});
export const montserrat = Montserrat({subsets: ['latin'], weight: ['400', '500', '600','700']});
export const inter = Inter({subsets: ['latin'], weight: ['400','700']});
export const noto = Noto_Sans({subsets: ['latin'], weight: ['200','300','400','500','700']});
export const titillium = Titillium_Web({subsets: ['latin'], weight: ['200','300','400','600','700']});