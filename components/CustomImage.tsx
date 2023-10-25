import { Container, StyledImage } from "@/styles/CustomImageStyle"

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {
    return (
        <Container>
            <StyledImage
                src={src}
                alt={alt}
                width={350}
                height={193}
                priority={priority ? true : false}
            />
        </Container>
    )
}
