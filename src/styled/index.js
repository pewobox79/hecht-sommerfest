import Hecht from '../assets/hecht-headoffice.jpg'

import styled from "styled-components";


export const WelcomeStyle = styled.div`
  text-align: justify;
  min-height: 50vh;
  font-size: 2rem;
  padding: 20px;
  flex-grow: 1;
 
`
export const Date = styled.div`
  font-size: 7rem;
  font-weight: bold;
  color: red;
  background-color: yellow;
  height: 100%;
  
  
  
`
export const DateFieldStyle = styled.div`
  flex-grow: 1;
  width: 15%;
  text-align: center;
`
export const TimeFieldStyle = styled.div`
flex-grow: 1;
  background-color: green;

  `

export const Time = styled.time`
  font-size: 5rem;
  color: red;
  
  min-height: 50vh;
 
`

export const IntroSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  background-color: purple;
`

export const FooterArea = styled.footer`
    width: 100%;
min-height: 20vh;
background-image: url(${Hecht});
  background-size: cover;
  
`


