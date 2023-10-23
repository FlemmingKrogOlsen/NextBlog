"use client"

import React from 'react'
import Video from './Video'
import { Container, ImageSide, StyledImage, VideoSide } from '@/styles/GalleryStyle'

type Props = {
    videoId: string,
    images: string[],
}

export default function Gallery({ videoId, images }: Props) {
    return (
        <Container>
            <ImageSide>
                {images.map((image,index) => {
                    return (
                        <StyledImage
                            key={index}
                            src={image ? `https://raw.githubusercontent.com/flemmingkrogolsen/blogposts/main/images/${image}` : "/images/default.jpg"}
                            alt={"alt"}
                            width={350}
                            height={140}
                            priority={true}
                        />
                    )
                })}
            </ImageSide>
            <VideoSide>
                <Video id={videoId} />
            </VideoSide>
        </Container>
    )
}
