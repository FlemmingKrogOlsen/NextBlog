import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import Footer from '@/components/Footer'
import styles from '@/styles/App.module.css'

export default function App({ children }: Children) {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <main className={styles.container}>
                {children}
            </main>
            <Footer />
        </>
    )
}