import { Address, Container, Inner, Outer } from "@/styles/FooterStyle";

export default function Footer() {
    return (
        <Outer>
            <Container>
                <Address>
                    <p>Firma adresse</p>
                    <p>Firma adresse</p>
                    <p>Firma adresse</p>
                </Address>
                <Inner>
                    <p>Who are we?</p>
                    <p>Contact Us</p>
                </Inner>
            </Container>
        </Outer>
    )
}