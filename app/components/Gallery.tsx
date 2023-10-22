"use client"

import React from 'react'
import Video from './Video'
import Image from 'next/image'
import styles from './Gallery.module.css'

type Props = {
    videoId: string,
    images: string[],
}

export default function Gallery({ videoId, images }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.imageSide}>
                {images.map((image) => {
                    return (
                        <Image
                        key={image}
                            className={styles.image}
                            src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                            alt={"alt"}
                            width={230}
                            height={140}
                            priority={true}
                        />
                    )
                })}
            </div>
            <div className={styles.videoSide}>
                <Video id={videoId} />
            </div>
        </div>
    )
}
