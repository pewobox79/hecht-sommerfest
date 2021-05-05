import HechtFooter from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Footer.jpg'
import HechtStars from '../assets/images/HECHT_Erfoeffnungsfeier_Digital_HG Kopie.png'
import HechtHq from '../assets/images/HECHT_Poernbach.jpg'
import {device} from "./device";

import styled from "styled-components";


/*start introduction incl. time and date*/
export const IntroSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const WelcomeStyle = styled.div`

  font-size: 2.5rem;
  padding: 20px;
  overflow: visible;
  flex-grow: 1;
  @media ${device.tablet} {
    text-align: left;
    font-size: 1.5rem;
  }

`
export const DateFieldStyle = styled.div`
  flex-grow: 1;
  width: 15%;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const Date = styled.div`
  font-size: 7rem;
  font-weight: bold;
  color: red;
  text-align: center;

  @media ${device.tablet} {
    padding-right: 30px;
    font-size: 5rem;

  }
`

export const TimeFieldStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media ${device.tablet} {
    justify-content: normal;
    align-items: flex-start;
  }



`
export const Time = styled.time`
  font-size: 5rem;
  color: red;

  @media ${device.tablet} {
    font-size: 3rem;
  }

`
/* /End introduction */

/* start main hecht image section before footer */
export const ImageSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-image: url(${HechtStars});
  background-size: auto;

  @media ${device.tablet} {
    display: none;
  }
`

export const HeadQuarter = styled.div`
  @media ${device.desktop} {
    width: 50%;
    height: 60%;
    background-image: url(${HechtHq});
    background-size: contain;
    background-repeat: no-repeat;
    border: 4px solid green;
  }

  @media ${device.laptop} {
    width: 80%;
    height: 90%
  }
`

export const EventInfoSection = styled.section`
  width: 100%;
  height: 100vh;
`

export const OuterLeft = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 100vh;
    background-color: red;

  }
`
export const OuterRight = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 50vh;
    background-color: red;

  }
`
export const ContactBox = styled.div`
  @media ${device.desktop} {
    width: 50%;
    height: 50%;
    background-color: purple
  }`
export const DirectionBox = styled.div`
  @media ${device.desktop} {
    width: 50%;
    height: 50%;
    background-color: yellow;
  }`
export const CovidBox = styled.div`
  @media ${device.desktop} {
    display: block;
    width: 100%;
    height: 50%;
    background-color: antiquewhite;
  }`
export const DirectionTitle = styled.h4`
  @media ${device.desktop} {
    font-size: 3rem;
    color: red;
  }`

export const ContactTitle = styled.h4`
  @media ${device.desktop} {
    font-size: 3rem;
    color: red;
  }`
export const CovidTitle = styled.h4`
  @media ${device.desktop} {
    font-size: 3rem;
    color: red;
  }`

export const ContactBody = styled.p`
  @media ${device.desktop} {
    font-size: 1rem;
    color: green;
  }
`
export const DirectionBody = styled.p`
  @media ${device.desktop} {
    font-size: 1rem;
    color: green;
  }
`
export const CovidBody = styled.p`
  @media ${device.desktop} {
    font-size: 1rem;
    color: green;
  }
`

/*End main hecht image section before footer*/

/*start FOOTER section*/
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

  @media ${device.tablet} {
    justify-content: center;
  }

`

export const ImgStyle = styled.img`
  @media ${device.desktop} {
    height: 100px;
  }


  @media ${device.tablet} {
    height: 50px;
    margin: auto;
  }
`
export const LegalNote = styled.div`
  font-size: 0.5rem;
  text-align: center;
  color: white`


