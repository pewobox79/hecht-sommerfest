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
  padding-bottom: 40px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

export const WelcomeStyle = styled.div`

  font-size: 3rem;
  padding: 20px;
  overflow: visible;
  flex-grow: 1;
  width: 70%;
  @media ${device.laptopL} {
    text-align: left;
    font-size: 2rem;
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
  flex-direction: column;
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
  }

  @media ${device.laptop} {
    width: 80%;
    height: 90%
  }
`

export const ImgTitle = styled.h3`
  @media ${device.desktop} {
    color: red;
    font-size: 4em;
    font-weight: bold;
    padding-bottom: 30px;
  }
  @media ${device.laptopL} {
    font-size: 3rem;
  }
`
/*End main hecht image section before footer*/

export const EventInfoSection = styled.section`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
  }

  @media ${device.laptop} {
    flex-direction: column;
    height: 1500px;

  }


`

export const OuterLeft = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    width: 50%;
    height: 100%;
  }
  @media ${device.laptopL} {

  }
`
export const OuterRight = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 100%;
  }
  @media ${device.laptopL} {
    flex-direction: column;
  }
`
export const ContactBox = styled.div`
  @media ${device.desktop} {
    box-sizing: border-box;
    width: 50%;
    height: 50%;
    padding: 20px;
    justify-content: center;
    overflow: hidden;
  }

  @media ${device.laptopL} {

    font-size: 1.4rem
  }`

export const AnchorStyle = styled.a`
  @media ${device.desktop} {
    color: grey;
    font-size: 3rem;
    text-decoration: none;
  }
  @media ${device.laptopL} {
    font-size: 2rem
  }
`

export const ServiceBox = styled.div`
  @media ${device.desktop} {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
    justify-content: center;

  }`

export const DirectionBox = styled.div`
  @media ${device.desktop} {
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    padding: 20px;

  }`
export const CovidBox = styled.div`
  @media ${device.desktop} {
    display: block;
    width: 100%;
    height: 50%;
    padding: 20px;

  }`

export const SpanStyle = styled.span`
  @media ${device.desktop} {
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }

`

export const DetailsTitle = styled.h4`
  @media ${device.desktop} {
    font-size: 4rem;
    color: red;
    padding-bottom: 40px;
    text-transform: uppercase;
  }

  @media ${device.laptopL} {
    font-size: 2rem
  }
`

export const UlStyle = styled.ul`
  padding: 20px 0px 0px 0px;
  margin: 0px;
`
export const ListStyle = styled.li`
  list-style-type: none;
  padding-bottom: 5px;
`
export const ShuttleTimeStyle = styled.span`
  font-weight: bold;
  color: grey;
`
export const CovidBody = styled.p`
  @media ${device.desktop} {
    font-size: 3rem;
    color: grey;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }
`
/*Anmeldesection*/

export const FeedbackSection = styled.section` @media ${device.desktop} {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red
}
  @media ${device.laptopL} {
    flex-direction: column;
    height: 1300px;
  }
`


export const AnmeldungRight = styled.div`
  @media ${device.desktop} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 50%;
  }
  @media ${device.laptopL} {
    flex-direction: column;
  }
`
export const Plusicon = styled.img`
@media${device.desktop} {
  height: 30px;
  display: inline-block;
  margin: 23px 0px 0px 10px

}

`


export const OverNightTitle = styled.h4`
  @media ${device.desktop} {
    font-size: 2.5rem;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
  }

  @media ${device.laptopL} {
    font-size: 1.5rem;

  }`
export const AnmeldeTitel = styled.h3`
  @media ${device.desktop} {
    color: white;
    font-size: 4rem;
    font-weight: bold;
  }

  @media ${device.laptopL} {
    font-size: 3rem;
  }
`


export const TimeStyle = styled.span`
  @media ${device.desktop} {
    font-weight: bold;
    text-transform: uppercase;
    color: black;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }

`

export const OverNightBox = styled.div`
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    height: 70%;

  }`

export const OverNightBody = styled.p`

  @media ${device.desktop} {
    font-size: 2.5rem;
    color: black;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }

`
export const Anmeldeform = styled.form`
  @media ${device.desktop} {
    padding: 40px;
    width: 80%;
    height: 80%;
  }

`
export const AnmeldeLabel = styled.label`
  @media ${device.desktop} {

    color: black;
    font-size: 2.5rem;
    font-weight: bold;
    display: block;
  }
`

export const CheckboxLabel = styled.label`
@media${device.desktop}{
  font-size: 1.5rem;
  font-weight: bold;
  vert-align: middle;
  
  
}
`

export const AnmeldeCheckbox = styled.input`
  width: 30px;
  height: 30px;
  margin: 10px 0px;
`
export const AnmeldeInput = styled.input`
  @media ${device.desktop} {
    height: 40px;
    width: 400px;
    margin: 10px 0px 5px 0px;

    &::placeholder {
      color: grey;
      text-transform: uppercase;
      padding: 5px 0px 5px 20px;
      font-size: 0.8rem
    }
  }
`

export const AnmeldeBemerkung = styled.textarea`
  @media ${device.desktop} {
    height: 150px;
    width: 400px;
    display: block;
    font-family: BlinkMacSystemFont ;

    &::placeholder {
      color: grey;
      text-transform: uppercase;
      padding: 5px 0px 5px 20px;
      font-size: 0.8rem
    }
  }
`


export const AnmeldeButton = styled.button`
  @media ${device.desktop} {
    outline: none;
    border: none;
    height: 63px;
    width: 270px;
    background-color: black;
    color: white;
    font-size: 2.5rem;
    font-weight: bold;
    transition: 0.5s ease-out;
    margin-top: 40px;

    &:hover {
      background-color: white;
      color: black;
      cursor: pointer;
    }

    @media ${device.laptopL} {
      height: 50px;
      width: 230px;
      font-size: 1.5rem;

    }
  }
`
export const Input = styled.input`width: 350px;
  height: 50px;
  margin: auto;
  height: 40px;
  border-radius: 5px;
  outline: none; `


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


