import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CypherGrow',
  description: 'Patreon con cryptomonedas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="forest">
      <body className={inter.className}>
      <Navbar className="sticky top-0"/>  
        {children}
        
        <Footer className="static bottom-0" />
      </body>
    </html>
  )
}
