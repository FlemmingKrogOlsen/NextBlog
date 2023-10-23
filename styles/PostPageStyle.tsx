"use client"

import styled from 'styled-components'

export const Header = styled.h2`
  font-size: 1.5;
  line-height: 1.75rem;
  margin: 0.5rem 0;
  color: white;
  text-align: center;   
  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3.25rem;
    margin: 1rem 0;
  } 
`

export const SubTitle = styled.p`
  font-size: 0.75rem;
  line-height: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0px;
  color: white;    
  padding: 0 1rem;
`

export const Article = styled.article`
  color: white;
  font-size: 1rem;    
  padding: 0 1rem;
`

export const Section = styled.section`
  margin-top: 1rem;
  padding: 0 1rem;
`

export const SectionHeader = styled.h3`
  color: white;    
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  color: white;    
`

export const HomeLink = styled.p`
  color: white;    
`
