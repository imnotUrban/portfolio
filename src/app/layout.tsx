import type { Metadata } from 'next'
import './globals.css'
import { inconsolata } from './fonts'
// ACA SE IMPORTAN LOS ESTILOS XD
import Head from 'next/head';

export const metadata: Metadata = {
  icons:{
    icon: '/favicon.ico'
  },
  title: 'Gerson Andrade Meza',
  description: 'Portafolio del ingeniero Gerson Andrade...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      </Head>
        <body className={ `${inconsolata.className} antialised`}>
          <div>
            
            {children}

          </div>
          
        </body>
      
    </html>
  )
}
