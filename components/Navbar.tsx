import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa"
import { Container, Header, NavBar, SoMe } from '@/styles/NavbarStyle'

export default function Navbar() {
    return (
        <NavBar>
            <Container>
                <Link href="/">
                    <Header>
                        United Real Estate
                    </Header>
                </Link>
                <SoMe>
                    <Link href="https://wa.me/004527286396" aria-label="Call us on WhatsApp">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen" aria-label="Visit us at InstaGram">
                        <FaInstagram />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen" aria-label="Visit us at Facebook">
                        <FaFacebookSquare />
                    </Link>
                </SoMe>
            </Container>
        </NavBar>
    )
}
