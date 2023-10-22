import Image from "next/image"
import styles from './CustomImage.module.css'

type Props = {
    src: string,
    alt: string,
    priority?: string,
}

export default function CustomImage({ src, alt, priority }: Props) {

    const prty = priority ? true : false

    return (

        <div className={styles.container}>
            <Image
                className={styles.image}
                src={src}
                alt={alt}
                width={1000}
                height={760}
                priority={prty}
            />
        </div>
    )
}

