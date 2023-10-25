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

const title = "United Real Estate Tanger"
const description = "Building affordable housing in Morocco Tanger"
const weburl = "https://next-blog-nu-lac.vercel.app/"
const imageName = "https://next-blog-nu-lac.vercel.app/images/default.jpg"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: 'Housing, Affordable, Morocco, Tanger',
  openGraph: {
    type: "website",
    url: weburl,
    title: title,
    description: description,
    siteName: title,
    images: [{
      url: imageName,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: description,
    images: [imageName],
  },
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
