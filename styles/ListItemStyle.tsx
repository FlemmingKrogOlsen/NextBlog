"use client"

import styled from 'styled-components'
import Image from "next/image"

export const Container = styled.div`
  background-color: rgb(71 85 105);
  max-width: 350px;
  margin: 0 auto;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 1rem;
  position: relative;
  @media (min-width: 768px) {
      min-width: 490px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
`

export const StyledImage = styled(Image)`
  margin: 0 auto;
  width: 100%;
  height: auto;
`

export const TextContainer = styled.div`
  padding: 0rem 0.5rem 0.25rem 0.5rem;  
`

export const Text = styled.div`
  display:flex;
  justify-content: space-between;
`

export const Header = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  max-width: 350px;
  position: absolute;
  bottom: 10px;
  left: 0.5rem;
  text-shadow: 1px 1px 2px black;
  font-size: 1.25rem;
  color: lightgray;
`