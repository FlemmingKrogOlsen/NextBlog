"use client"

import styled from 'styled-components'

export const Container = styled.footer`
  color: white;
  font-size: 0.75rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem 0rem;
    width: 1000px;
    margin: 0 auto;
  } 
`

export const Outer = styled.div`
  background-color: rgb(71 85 105);
`

export const Inner = styled.div`

  display:flex;
  justify-content: space-around;
  width:200px;
  align-items: center;
`

export const Adress = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  
  align-items: center;
  p {
    margin-right: 20px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
} 
`