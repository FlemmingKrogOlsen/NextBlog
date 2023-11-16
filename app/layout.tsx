import { Metadata } from 'next'
import App from './App'
import '@/styles/global.css'

const myTitle = "United Real Estate"
const title = myTitle + " - Morocco / Tanger"
const description = myTitle + " - Aims to Build affordable housing in Morocco / Tanger."
const weburl = "https://next-blog-nu-lac.vercel.app/"
const imageName = "https://next-blog-nu-lac.vercel.app/images/default.jpg"
const keywords = "Housing, Affordable, Morocco, Tanger"

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: keywords,

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
    site: myTitle
  },
}

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <App>
          {children}
        </App>
      </body>
    </html>
  )
}
