import Link from "next/link"
import { Container, Text } from "@/styles/NotFoundStyle"

export default function NotFound() {
    return (
        <Container>
            <Text>Sorry, the requested post does not exist.</Text>
            <Link href="/">Back to Home</Link>
        </Container>
    )
}