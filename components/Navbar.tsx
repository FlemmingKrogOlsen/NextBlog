import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa"
import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/">
                    <h1 className={styles.header}>
                        United Real Estate
                    </h1>
                </Link>
                <div className={styles.some}>
                    <Link href="https://wa.me/004527286396" aria-label="Call us on WhatsApp">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen" aria-label="Visit us at InstaGram">
                        <FaInstagram />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen" aria-label="Visit us at Facebook">
                        <FaFacebookSquare />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
