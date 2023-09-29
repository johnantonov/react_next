
import { Header } from '@/components/sections/Header/Header'
import './globals.css'
import { Fahkwang, Inter } from 'next/font/google'
import { Talk } from '@/components/sections/Talk/Talk'
import { StoreProvider } from '@/components/state/StoreProvider';
import { TalkProvider } from '@/components/contexts/talkProvider';
import { Hero } from '@/components/sections/Hero/Hero';
import { Partners } from '@/components/sections/Partners/Partners';
import { Join } from '@/components/sections/Join/Join';
import { Faq } from '@/components/sections/Faq/Faq';
import { Footer } from '@/components/sections/Footer/Footer';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RINE VR',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <TalkProvider>
        <StoreProvider>
          <body className={inter.className}>
            <header>
              <div className='lightBg'></div>
              <div className='womanBg'> </div>
              <Header />
              <Hero />
            </header>
            <main>
              {children}
            </main>
            <Partners />
            <Join />
            <Faq />
            <Talk />
            <Footer />
          </body>
        </StoreProvider>
      </TalkProvider>
    </html>
  )
}
