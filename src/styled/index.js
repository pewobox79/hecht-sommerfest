import Hecht from '../assets/hecht-headoffice.jpg'

import styled from "styled-components";

export const Date = styled.div`
  font-size: 7rem;
  float: left;
  width: 50%;
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: red;
`
export const Time = styled.time`
  font-size: 5rem;
  display: flex;
  justify-content: center;
  color: red;
`

export const IntroSection = styled.div`
  width: 100%;
  min-height: 50vh;
  margin: auto;
`

export const FooterArea = styled.footer`
    width: 100%;
min-height: 20vh;
background-image: url(${Hecht});
  background-size: cover;
  
`


