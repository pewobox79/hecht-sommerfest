import HechtFooter from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Footer.jpg'
import HechtStars from '../assets/images/HECHT_Erfoeffnungsfeier_Digital_HG Kopie.png'
import HechtHq from '../assets/images/HECHT_Poernbach.jpg'
import {device} from "./device";
import hecht from "../assets/images/HECHT_Einladungskarte_Motiv_MA-Header.jpg";
import styled from "styled-components";


/*main header css*/

export const Wrapper = styled.section`
@media${device.desktop} {
  height: 50vh;
  background-image: url(${hecht});
  background-size: cover;
  width: 100%;
}

`
export const MainHeaderStyle = styled.div`
@media${device.desktop} {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}`

export const Intro = styled.div`
@media${device.desktop} {
  width: 50%;
  position: absolute;
  padding-left: 10%;
} @media${device.tablet} {
  width: 100%;
}

`
export const Title = styled.h1`
@media${device.desktop} {
  font-size: 5rem;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
} @media${device.laptopL} {
  font-size: 4rem;

} @media${device.laptop} {
  font-size: 3rem;
} @media${device.mobileL} {
  font-size: 2.2rem;
}


`
export const Nav = styled.nav`
@media${device.desktop} {
  height: 30px;
  margin: 0px;
}`

export const List = styled.li`
@media${device.desktop} {
  text-transform: uppercase;
  list-style-type: none;
  color: white;
  float: left;
  font-size: 2rem;
  font-weight: bold;
} @media${device.laptopL} {
  font-size: 1.5rem;
} @media${device.tablet} {
  font-size: 1.5rem;
}

`
/*start introduction incl. time and date*/
export const IntroSectionStyle = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  padding-bottom: 40px;

} @media${device.laptopL} {

} @media${device.mobileL} {
  flex-direction: column;
  height: 1000px
}
`

export const WelcomeStyle = styled.div`
@media${device.desktop} {
  font-size: 2.5rem;
  margin: 20px;
  overflow: visible;
  flex-grow: 1;
  width: 70%;
} @media${device.laptopL} {
  text-align: left;
  font-size: 2rem;
  margin: 20px;
  width: 60%;
  line-height: 40px;
} @media${device.mobileL} {
  font-size: 1.3rem;
  overflow: hidden;
  width: 90%
}
`
export const DateFieldStyle = styled.div`
@media${device.desktop} {
  width: 15%;
  text-align: center;
  display: flex;
  flex-direction: column;
} @media${device.mobileL} {
  flex-direction: row;
  margin-left: 20px;
}
`
export const Date = styled.div`
@media${device.desktop} {
  font-size: 6.5rem;
  font-weight: bold;
  color: red;
  text-align: center;
} @media${device.mobileL} {
  padding-right: 30px;
  margin: 20px;
  font-size: 4.5rem;
  width: 30%

}
`

export const TimeFieldStyle = styled.div`
@media${device.desktop} {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 30%;
  margin: 20px 0px 0px 0px;
} @media${device.mobileL} {
  justify-content: normal;
  align-items: flex-start;
  margin: 20px;
  width: 100%
}



`
export const Time = styled.time`
@media${device.desktop} {
  font-size: 4rem;
  color: red;
} @media${device.laptopL} {
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

@media${device.tablet} {
  display: none;
}
`

export const HeadQuarter = styled.div`
@media${device.desktop} {
  width: 50%;
  height: 60%;
  background-image: url(${HechtHq});
  background-size: contain;
  background-repeat: no-repeat;
} @media${device.laptop} {
  width: 80%;
  height: 90%
}
`

export const ImgTitle = styled.h3`
@media${device.desktop} {
  color: red;
  font-size: 4em;
  font-weight: bold;
  padding-bottom: 30px;
} @media${device.laptopL} {
  font-size: 3rem;
}
`
/*End main hecht image section before footer*/

/*start event detail section*/
export const EventWrapper = styled.div`
@media${device.desktop} {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 100vh;
} @media${device.laptopL} {

} @media${device.mobileL} {
  flex-direction: column;
}

`


export const EventInfoSection = styled.section`
@media${device.desktop} {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
} @media${device.laptop} {
  flex-direction: column;
  height: 1200px;

}

`

export const OuterLeft = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  height: 100%;
  flex-wrap: wrap;
  margin: 30px;

} @media${device.laptopL} {
  align-items: flex-start;
} @media${device.mobileL} {
  flex-direction: column;
  width: 90%;
}
`
export const OuterRight = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  margin: 30px

} @media${device.laptopL} {
  flex-direction: column;


} @media${device.mobileL} {
  flex-wrap: nowrap;

}

`
export const ContactBox = styled.div`
@media${device.desktop} {
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  padding: 20px;
  justify-content: center;
} @media${device.laptopL} {
  width: 50%;
  font-size: 1.4rem

} @media${device.mobileL} {
  width: 100%;
}`

export const AnchorStyle = styled.a`
@media${device.desktop} {
  color: grey;
  font-size: 2.5rem;
  text-decoration: none;
} @media${device.laptopL} {
  font-size: 2rem
}
`

export const DirectionBox = styled.div`
@media${device.desktop} {
  width: 50%;
  height: 50%;
  box-sizing: border-box;
  padding: 20px;

} @media${device.mobileL} {
  width: 100%
}
`
export const CovidBox = styled.div`
@media${device.desktop} {
  display: block;
  width: 100%;
  height: 50%;
  padding: 20px;
} @media${device.mobileL} {
  padding: 10px;
  width: 90%;
}

`

export const SpanStyle = styled.span`
@media${device.desktop} {
  font-weight: bold;
  font-size: 2.5rem;
  text-transform: uppercase;
} @media${device.laptopL} {
  font-size: 2rem;
}

`

export const DetailsTitle = styled.h4`
@media${device.desktop} {
  font-size: 3.2rem;
  color: red;
  padding-bottom: 40px;
  text-transform: uppercase;
} @media${device.laptopL} {
  font-size: 2.5rem
} @media${device.mobileL} {
  font-size: 1.5rem
}
`

export const UlStyle = styled.ul`
  padding: 0px;
  margin: 0px;
`
export const CovidBody = styled.p`
@media${device.desktop} {
  font-size: 2.5rem;
  color: grey;
} @media${device.laptopL} {
  font-size: 2rem;
} @media${device.mobileL} {
  font-size: 1.3rem
}
`
/*Anmeldesection*/

export const FeedbackSection = styled.section` @media${device.desktop} {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: red
} @media${device.laptopL} {
  flex-direction: column;
  height: 1500px;
}
`


export const AnmeldungRight = styled.div`
@media${device.desktop} {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 50%;
} @media${device.laptopL} {
  flex-direction: column;
} @media${device.mobileL} {
  margin: 20px;
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
@media${device.desktop} {
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
} @media${device.laptopL} {
  font-size: 1.5rem;

} @media${device.mobileL} {
  font-size: 1.3rem;

}`
export const AnmeldeTitel = styled.h3`
@media${device.desktop} {
  color: white;
  font-size: 3rem;
  font-weight: bold;
  margin: 40px

} @media${device.laptopL} {
  font-size: 4rem;
  padding-top: 40px;
}
`


export const TimeStyle = styled.span`
@media${device.desktop} {
  font-weight: bold;
  text-transform: uppercase;
  color: black;
} @media${device.laptopL} {
  font-size: 4rem;
}

`

export const OverNightBox = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: column;
  height: 70%;

} @media${device.laptopL} {
  margin: 0px 0px 0px 40px;
}`

export const OverNightBody = styled.p`

@media${device.desktop} {
  font-size: 2rem;
  color: black;
} @media${device.laptopL} {
  font-size: 1.6rem;
} @media${device.mobileL} {
  font-size: 1.3rem;
}

`
export const Anmeldeform = styled.form`
@media${device.desktop} {
  padding: 40px;
  width: 80%;
  height: 80%;
} @media${device.laptopL} {
  height: 60%
} @media${device.mobileL} {
  padding: 0px;
  width: 100%
}


`
export const AnmeldeLabel = styled.label`
@media${device.desktop} {

  color: black;
  font-size: 2.5rem;
  font-weight: bold;
  display: block;
  margin-bottom: 30px;
} @media${device.mobileL} {
  font-size: 2rem;
  margin-top: 30px;

}
`

export const CheckboxLabel = styled.label`
@media${device.desktop} {
  font-size: 1.5rem;
  font-weight: bold;
  vert-align: middle;
} @media${device.mobileL} {
  font-size: 1.1rem;

}
`

export const AnmeldeCheckbox = styled.input`
  width: 30px;
  height: 30px;
  margin: 10px 0px;
  margin: 0px 10px 0px 0px
`
export const AnmeldeInput = styled.input`
@media${device.desktop} {
  height: 40px;
  width: 400px;
  margin: 10px 0px 5px 0px;

  &::placeholder {
    color: grey;
    text-transform: uppercase;
    padding: 5px 0px 5px 20px;
    font-size: 0.8rem
  }
} @media${device.mobileL} {
  width: 90%
}
`

export const AnmeldeBemerkung = styled.textarea`
@media${device.desktop} {
  height: 150px;
  width: 400px;
  display: block;
  font-family: BlinkMacSystemFont;

  &::placeholder {
    color: grey;
    text-transform: uppercase;
    padding: 5px 0px 5px 20px;
    font-size: 0.8rem
  }
} @media${device.mobileL} {
  width: 90%
`


export const AnmeldeButton = styled.button`
@media${device.desktop} {
  outline: none;
  border: none;
  height: 63px;
  width: 270px;
  background-color: black;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.5s ease-out;
  margin-top: 40px;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

@media${device.laptopL} {
  height: 50px;
  width: 230px;
  font-size: 1.2rem;

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

@media${device.tablet} {
  justify-content: center;
}

`

export const ImgStyle = styled.img`
@media${device.desktop} {
  height: 100px;
} @media${device.tablet} {
  height: 50px;
  margin: auto;
}
`
export const LegalNote = styled.div`
  font-size: 0.5rem;
  text-align: center;
  color: white`


