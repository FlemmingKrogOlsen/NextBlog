"use client"

import styled from 'styled-components'

export const Section = styled.section`
  margin: 1.5rem auto 0 auto;
  width: 100%;    
  @media (min-width: 768px) {
    max-width: 1000px;    
  }
`

export const Header = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 2rem;
  }    
`

export const List = styled.div`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;    
`