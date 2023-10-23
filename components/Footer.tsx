import { Adress, Container, Inner, Outer } from "@/styles/FooterStyle";

export default function Footer() {
    return (
        <Outer>
            <Container>
                <Adress>
                    <p>Firma adresse</p>
                    <p>Firma adresse</p>
                    <p>Firma adresse</p>
                </Adress>
                <Inner>
                    <p>Who are we?</p>
                    <p>Contact Us</p>
                </Inner>
            </Container>
        </Outer>
    )
}