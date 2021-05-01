import HechtFooter from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Footer.jpg'

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

`
export const DateFieldStyle = styled.div`
  flex-grow: 1;
  width: 15%;
  text-align: center;
`
export const TimeFieldStyle = styled.div`
  flex-grow: 1;

`

export const Time = styled.time`
  font-size: 5rem;
  color: red;

`

export const IntroSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 50vh;
`

export const FooterArea = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30vh;
  background-image: url(${HechtFooter});
  background-size: cover;

`

export const FooterLogo = styled.div`
    padding-left: 50px;
  
`

