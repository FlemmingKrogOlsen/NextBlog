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

const title = "United Real Estate - Morocco / Tanger"
const description = "United Real Estate - Aims to Build affordable housing in Morocco / Tanger."
const weburl = "https://next-blog-nu-lac.vercel.app/"
const imageName = "https://next-blog-nu-lac.vercel.app/images/default.jpg"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: 'Housing, Affordable, Morocco, Tanger',

  manifest: `${weburl}site.webmanifest`,
  icons: {
    icon: '/favicon-32x32.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [{
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#5bbad5'
    },
    {
      rel: 'canonical',
      url: weburl
    }]
  },

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
    site: "United Real Estate"
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
