import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import { Container, Header, StyledImage, Text, TextContainer, ImageContainer } from "@/styles/ListItemStyle"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, subtitle, image, price, areal } = post
    const formattedDate = getFormattedDate(date)

    return (
        <Container>
            <Link href={`/posts/${id}`}>
                <ImageContainer>
                    <StyledImage
                        src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                        alt={title}
                        width={490}
                        height={0}
                        sizes="100vw"
                        priority={true}
                    />
                    <Header>{title ? title : "Not specified"}</Header>
                </ImageContainer>
                <TextContainer>
                    <Text>{subtitle ? subtitle : "Not specified"}</Text>
                    <br />
                    <Text>
                        <p>Price:</p>
                        <p>{price ? ` ${price}` : `Not specified`}</p>
                    </Text>
                    <Text>
                        <p>Areal:</p>
                        <p> {areal ? ` ${areal}` : `Not specified`}</p>
                    </Text>
                    <Text>
                        <p>Added:</p>
                        <p>{formattedDate}</p>
                    </Text>
                </TextContainer>
            </Link >
        </Container >
    )
}