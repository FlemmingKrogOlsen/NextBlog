import Navbar from './components/Navbar'
import { Metadata } from 'next'
import './globals.css'
import styles from './layout.module.css'

export const metadata: Metadata = {
  title: "United Real Estate",
  description: 'Created by KrogOlsen S.A.R.L.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={styles.body}>
        <Navbar />
        <div className={styles.hero}>
          <div className={styles.container}>
            HeroBanner<br />
            Affordable Housing.....
          </div>
        </div>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <div>
            Firma adresse<br />
            Firma adresse<br />
            Firma adresse<br />
          </div>
            <p>Who are we?</p>
            <p>Contact Us</p>
            <p>FAQ's</p>
        </footer>
      </body>
    </html>
  )
}
