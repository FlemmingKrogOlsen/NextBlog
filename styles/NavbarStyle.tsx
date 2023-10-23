"use client"

import styled from 'styled-components'

export const NavBar = styled.nav`
  background-color: rgb(71 85 105);
  padding: 1rem;
  top: 0;
  position: sticky;
    z-index: 10;
  @media (min-width: 768px) {
  } 
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items:center;
  width: 100%;
  @media (min-width: 768px) {
    max-width: 1000px;
    margin: 0 auto;
  } 
`

export const Header = styled.h1`
  color: white;
  font-weight: 700;    
  font-size: 1rem;
  line-height: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  } 
`

export const SoMe = styled.div`
   display: flex;
  justify-content: center;
  font-size: 1.25rem;
  line-height: 1.5rem;
  gap: 1rem;
  vertical-align: middle; 
  @media (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }    
`