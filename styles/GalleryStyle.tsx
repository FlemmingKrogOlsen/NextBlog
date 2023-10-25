"use client"

import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const StyledImage = styled(Image)`
width: 100%;
border: 5px solid white;
border-radius: 1rem;
margin-top: 0.5rem;
cursor: zoom-in;

@media (min-width: 768px) {
    width: 250px;
    height: auto;
    /* height: 138px; */
  }
`

export const VideoSide = styled.div`
margin-top: 0.5rem;
border: 5px solid white;
border-radius: 1.25rem;
@media (min-width: 768px) {
  width: 20%;
  }
`

export const ImageSide = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
@media (min-width: 768px) {
  width: 80%
  }
`