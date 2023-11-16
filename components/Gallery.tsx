"use client"

import { useState } from 'react'
import Image from 'next/image'
import Video from './Video'
import Modal from './Modal'
import isMobile from '@/lib/isMobile'
import styles from '@/styles/Gallery.module.css'

type Props = {
    videoId: string,
    images: string[],
}

export default function Gallery({ videoId, images }: Props) {
    const [show, setShow] = useState<boolean>(false);
    const [showImage, setShowImage] = useState<string>("")
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {images.map((image, index) => {
                    return (
                        <Image
                            className={styles.image}
                            key={index}
                            src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                            alt={"Photo from selected article"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority={true}
                            role="button"
                            onClick={() => {
                                setShowImage(image)
                                setShow(true)
                            }}
                        />
                    )
                })}
            </div>
            <div className={styles.videoContainer}>
                <Video id={videoId} />
            </div>
            {isMobile()
                ? (<></>)
                : (
                    <Modal
                        title=""
                        show={show}
                        onClose={() => setShow(false)}
                    >
                        <Image
                            className={styles.modalImage}
                            src={`https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${showImage}`}
                            alt="Image"
                            width={0}
                            height={0}
                            sizes="100vw"
                            priority={true}
                        />
                    </Modal>
                )}
        </div>
    )
}
