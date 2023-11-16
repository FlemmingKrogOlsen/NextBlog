import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"
import styles from '@/styles/ListItem.module.css'

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, subtitle, image, price, areal } = post
    const formattedDate = getFormattedDate(date)

    return (
        <div className={styles.container}>
            <Link href={`/posts/${id}`}>
                <div className={styles.imageContainer}>
                    <Image
                        className={styles.image}
                        src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                        alt={title}
                        width={490}
                        height={0}
                        sizes="100vw"
                        priority={true}
                    />
                    <h2 className={styles.header}>{title ? title : "Not specified"}</h2>
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.text}>{subtitle ? subtitle : "Not specified"}</div>
                    <br />
                    <div className={styles.text}>
                        <p>Price:</p>
                        <p>{price ? ` ${price}` : `Not specified`}</p>
                    </div>
                    <div className={styles.text}>
                        <p>Areal:</p>
                        <p> {areal ? ` ${areal}` : `Not specified`}</p>
                    </div>
                    <div className={styles.text}>
                        <p>Added:</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </Link >
        </div >
    )
}