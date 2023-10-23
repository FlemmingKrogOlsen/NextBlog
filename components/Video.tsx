import { Container, Iframe } from '@/styles/VideoStyle';

type Props = {
    id: string
}

export default function Video({ id }: Props) {
    return (
        <Container>
            <Iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </Container>
    );
}
