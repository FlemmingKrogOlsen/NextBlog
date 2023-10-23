"use client"

import styled from 'styled-components'
import Image from "next/image"

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center; 
`

export const StyledImage = styled(Image)`
  border-radius: 1rem;
  border: 5px solid white;    
`