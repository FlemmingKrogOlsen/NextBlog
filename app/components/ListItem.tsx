import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"
import styles from './ListItem.module.css'
import Image from "next/image"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date, subtitle, image, price, areal } = post
    const formattedDate = getFormattedDate(date)

    return (
        <Link href={`/posts/${id}`}>
            <div className={styles.container}>
                <Image
                    className={styles.image}
                    src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                    alt={"alt"}
                    width={200}
                    height={140}
                    priority={true}
                />
                <div className={styles.text_container}>
                    <h1 className={styles.header}>{title}</h1>
                    <p className={styles.text}>{subtitle}</p>
                    <br />
                    <p className={styles.text}>{price ? `Price: ${price}` : ""}</p>
                    <p className={styles.text}>{areal ? `Areal: ${areal}` : ""}</p>
                    <p className={styles.text}>Added: {formattedDate}</p>
                </div>
            </div >
        </Link >
    )
}