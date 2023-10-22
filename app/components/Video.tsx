import styles from './Video.module.css'

type Props = {
    id: string
}

export default function Video({ id }: Props) {
    return (
        <div className={styles.container}>
            <iframe
                className={styles.iframe}
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    );
}
