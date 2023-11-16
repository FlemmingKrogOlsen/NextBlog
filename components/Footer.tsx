import styles from '@/styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.outer}>
            <footer className={styles.container}>
                <div className={styles.address}>
                    <p>Firma adresse</p>
                    <p>Firma adresse</p>
                    <p>Firma adresse</p>
                </div>
                <div className={styles.inner}>
                    <p>Who are we?</p>
                    <p>Contact Us</p>
                </div>
            </footer>
        </div>
    )
}