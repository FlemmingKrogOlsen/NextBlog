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
                width={1000}
                height={760}
                priority={prty}
            />
        </Container>
    )
}

