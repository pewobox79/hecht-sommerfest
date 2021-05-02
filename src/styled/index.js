import HechtFooter from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Footer.jpg'
import HechtStars from '../assets/images/HECHT_Erfoeffnungsfeier_Digital_HG Kopie.png'
import HechtHq from '../assets/images/HECHT_Poernbach.jpg'

import styled from "styled-components";

/*start introduction incl. time and date*/
export const IntroSectionStyle = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 50vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const WelcomeStyle = styled.div`
  text-align: justify;
  font-size: 2rem;
  padding: 20px;
  overflow: visible;
  flex-grow: 1;
@media(max-width: 768px){
  text-align: left;
}

`
export const DateFieldStyle = styled.div`
  flex-grow: 1;
  width: 15%;
  text-align: center;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    flex-direction: row;
 justify-content: space-between;
  }
`
export const Date = styled.div`
  font-size: 7rem;
  font-weight: bold;
  color: red;
  text-align: center;

  @media (max-width: 768px) {
    padding-right: 30px;
    font-size: 5rem;
   
  }
`

export const TimeFieldStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  
  @media (max-width: 768px){
    justify-content: normal;
    align-items: flex-start;
  }
  
  

`
export const Time = styled.time`
  font-size: 5rem;
  color: red;
  
  @media (max-width: 768px){
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
  justify-content: center;
  background-image: url(${HechtStars});
  background-size: auto;
  z-index: 4;
  
  @media(max-width: 768px){
    display: none;
  }
`

export const HeadQuarter = styled.div`
  width: 80%;
  height: 60%;
  background-image: url(${HechtHq});
  background-size: contain;
  background-repeat: no-repeat;

`

export const EventInfoSection = styled.section`
width: 100%;
height: 100vh;  
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
  
  @media (max-width: 768px){
    justify-content: center;
  }

`

export const ImgStyle = styled.img`
height: 100px;

  @media (max-width: 768px){

    height: 50px;
    margin: auto;
  }
  `
 export const LegalNote = styled.div`
   font-size: 0.5rem;
 text-align: center;
 color: white`


