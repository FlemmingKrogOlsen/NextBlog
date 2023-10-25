import Navbar from '@/components/Navbar'
import { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyle'
import { Main } from '@/styles/LayoutStyle'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
}

// export const metadata: Metadata = {
//   title: 'United Real Estate Tanger',
//   description: 'Building affordable housing in Morocco Tanger',
//   keywords: 'Housing, Affordable, Morocco, Tanger',
// }

export default function RootLayout({ children }: Props) {
  
  const imageName ="default.jpg"

  return (
    <html lang="en">
      <Head>
        <title>United Real Estate Tanger</title>
        <meta name="title" content="United Real Estate Tanger" />
        <meta name="description" content="Building affordable housing in Morocco Tanger" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://next-blog-nu-lac.vercel.app/" />
        <meta property="og:title" content="United Real Estate Tanger" />
        <meta property="og:description" content="Building affordable housing in Morocco Tanger" />
        <meta property="og:image" content={`https://next-blog-nu-lac.vercel.app/images/${imageName}`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://next-blog-nu-lac.vercel.app/" />
        <meta property="twitter:title" content="United Real Estate Tanger" />
        <meta property="twitter:description" content="Building affordable housing in Morocco Tanger" />
        <meta property="twitter:image" content={`https://next-blog-nu-lac.vercel.app/images/${imageName}`} />

      </Head>

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
