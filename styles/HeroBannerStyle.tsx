"use client"

import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  height: 100px;
  font-size: 1rem;
  @media (min-width: 768px) {
    height: 250px;
    font-size: 4rem;
  } 
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(10 41 59);
    margin: 0 auto;
    color: white;
    border-top: 5px solid white;
    border-bottom: 5px solid white;
    @media (min-width: 768px) {
        border-top: 20px solid white;
        border-bottom: 20px solid white;
        max-width: 1000px;
    } 
  }
`