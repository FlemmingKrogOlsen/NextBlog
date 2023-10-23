import { Container, StyledImage } from "@/styles/CustomImageStyle"

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {

    const prty = priority ? true : false

    return (

        <Container>
            <StyledImage
                src={src}
                alt={alt}
                width={350}
                height={140}
                priority={prty}
            />
        </Container>
    )
}

