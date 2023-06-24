import './globals.css'
import { Inter } from 'next/font/google'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { StoreProvider } from '@/redux/services/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Билетопоиск',
  description: 'Билетопоиск',
}

export default function RootLayout({children}) {
  return (
      <html lang="ru">
          <body>
            <StoreProvider> 
              <Header />
              <main className="main">
               {children}
                </main>
              <Footer />
            </StoreProvider> 
          </body>
      </html>
  )
}
