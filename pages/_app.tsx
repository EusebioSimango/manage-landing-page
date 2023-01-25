import '../styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const beVietnamPro = localFont({
  src: [
    {
      path: './fonts/BeVietnamPro-Regular.ttf',
      weight: '400',
      style: 'normal'
    }, 
    {
      path: './fonts/BeVietnamPro-Bold.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: './fonts/BeVietnamPro-Black.ttf',
      weight: '700',
      style: 'normal'
    },
  ],
  variable: '--font-bevietnampro',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${beVietnamPro.className}`} >
      <Component {...pageProps} />
    </main>
  )
}
