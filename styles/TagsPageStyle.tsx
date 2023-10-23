"use client"

import styled from 'styled-components'

export const ErrorText = styled.p`
  margin-top: 2.5rem;
  text-align: center;    
`

export const KeywordError = styled.div`
  text-align: center;
  margin-top: 2.5rem;    
`

export const Header = styled.h2`
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0px;
  color: white;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`

export const Section = styled.section`
  margin: 1.5rem auto 0px auto;
  max-width: 1000px;
`

export const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 1rem;   
`