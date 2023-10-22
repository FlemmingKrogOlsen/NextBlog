import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <h1 className={styles.header}>
                    <Link href="/">
                        United Real Estate
                    </Link>
                </h1>
                <div className={styles.social}>
                    <Link href="https://wa.me/004527286396">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen">
                        <FaInstagram />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen">
                        <FaFacebookSquare />
                    </Link>

                </div>
            </div>
        </nav>
    )
}
