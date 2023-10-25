import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyle'
import { Main } from '@/styles/LayoutStyle'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'

type Props = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'United Real Estate Tanger',
  description: 'Building affordable housing in Morocco Tanger',
  keywords: 'Housing, Affordable, Morocco, Tanger',
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Navbar />
          <HeroBanner />
          <Main>
            {children}
          </Main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
