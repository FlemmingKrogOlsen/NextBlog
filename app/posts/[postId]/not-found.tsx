import Link from "next/link"
import styles from '@/styles/not-found.module.css'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Sorry, the requested post does not exist.</p>
            <Link href="/">Back to Home</Link>
        </div>
    )
}