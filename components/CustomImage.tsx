import Image from "next/image"
import styles from '@/styles/CustomImage.module.css'

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {
    return (
        <div className={styles.container}>
            <Image
                className={styles.image}
                src={src}
                alt={alt}
                width={350}
                height={193}
                priority={priority ? true : false}
            />
        </div>
    )
}
