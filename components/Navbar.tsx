import Link from 'next/link'
import React from 'react'
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa"
import { Container, Header, NavBar, SoMe } from '@/styles/NavbarStyle'

export default function Navbar() {
    return (
        <NavBar>
            <Container>
                <Header>
                    <Link href="/">
                        United Real Estate
                    </Link>
                </Header>
                <SoMe>
                    <Link href="https://wa.me/004527286396">
                        <FaWhatsapp />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen">
                        <FaInstagram />
                    </Link>
                    <Link href="https://github.com/FlemmingKrogOlsen">
                        <FaFacebookSquare />
                    </Link>
                </SoMe>
            </Container>
        </NavBar>
    )
}
