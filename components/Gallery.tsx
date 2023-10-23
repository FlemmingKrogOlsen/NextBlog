"use client"

import { useState } from 'react'
import Video from './Video'
import { Container, ImageSide, StyledImage, VideoSide } from '@/styles/GalleryStyle'
import Modal from './Modal'
import Image from 'next/image'
import isMobile from '@/lib/isMobile'

type Props = {
    videoId: string,
    images: string[],
}

export default function Gallery({ videoId, images }: Props) {
    const [show, setShow] = useState<boolean>(false);
    const [showImage, setShowImage] = useState<string>("")
    return (
        <Container>
            <ImageSide>
                {images.map((image, index) => {
                    return (
                        <StyledImage
                            key={index}
                            src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                            alt={"alt"}
                            width={350}
                            height={140}
                            priority={true}
                            onClick={() => {
                                setShowImage(image)
                                setShow(true)
                            }}
                        />
                    )
                })}
            </ImageSide>
            <VideoSide>
                <Video id={videoId} />
            </VideoSide>
            {isMobile() 
                ? ("") 
                : (
                    <Modal
                    title=""
                    show={show}
                    onClose={() => setShow(false)}
                >
                    <Image
                        src={`https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${showImage}`}
                        alt="Image"
                        width={1000}
                        height={400}
                        priority={true}

                    />
                </Modal>
            )}
        </Container>
    )
}
