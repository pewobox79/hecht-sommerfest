import HechtFooter from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Footer.jpg'
import HechtStars from '../assets/images/HECHT_Erfoeffnungsfeier_Digital_HG.jpg'
import HechtHq from '../assets/images/HECHT_Poernbach.jpg'
import {device} from "./device";
import {color, color80} from './color'
import hecht from "../assets/images/HECHT_Einladungskarte_Motiv_MA-Header.jpg";
import stripes from "../assets/images/HECHT_Einladungskarte_HG_rot-2.png"
import stars from "../assets/images/HECHT_Einladungskarte_HG_weiß-2.png"
import styled from "styled-components";


/*main header css*/

export const Wrapper = styled.section`
@media${device.desktop} {
  height: 50vh;
  background-image: url(${hecht});
  background-size: cover;
  width: 100%;
} @media${device.laptop} {
  height: 500px;
} @media${device.tablet} {
  height: 380px;
} @media${device.mobileL} {

}

`
export const MainHeaderStyle = styled.div`
@media${device.desktop} {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

`

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
  font-family: SourceSansProBold;
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
  font-family: SourceSansProBold;
} @media${device.laptopL} {
  font-size: 1.5rem;
} @media${device.tablet} {
  font-size: 1.5rem;
}

  &:hover {
    color: ${color.red}
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
  height: 750px;
  padding-bottom: 0px;
} @media${device.tablet} {

} @media${device.mobileL} {
  height: 550px;
} @media${device.mobileM} {
  height: 600px
}
`
export const WelcomeStyle = styled.div`
@media${device.desktop} {
  font-size: 2.5rem;
  font-weight: normal;
  font-family: SourceSansProLight;
  margin: 30px;
  overflow: visible;
  flex-grow: 1;
  width: 70%;
  color: ${color.grey};
} @media${device.laptopL} {
  text-align: left;
  font-size: 2rem;
  margin: 20px;
  width: 60%;
  line-height: 40px;
} @media${device.tablet} {
  font-size: 1.6rem;
} @media${device.mobileL} {
  font-size: 1.3rem;
  overflow: hidden;
  width: 90%;
  line-height: 30px;
}
`

export const CounterFieldStyle = styled.div`
@media${device.desktop} {
  display: flex;
  justify-content: center;
  background-color: green;
} @media${device.laptopL} {

} @media${device.mobileL} {
  flex-direction: column;
} @media${device.mobileM} {
  background-color: purple;
}
`
export const DateFieldStyle = styled.div`
@media${device.desktop} {
  width: 15%;
  text-align: center;
  display: flex;
  flex-direction: column;
} @media${device.tablet} {

} @media${device.mobileL} {
  flex-direction: row;
  margin-left: 0px;
} @media${device.mobileM} {
  width: 100%;
  margin: 0px;

}
`
export const Date = styled.div`
@media${device.desktop} {
  font-size: 6.5rem;
  font-weight: bold;
  font-family: SourceSansProBold;
  color: ${color.red};
  text-align: center;
} @media${device.laptopL} {
  font-size: 6rem;

} @media${device.tablet} {

} @media${device.mobileL} {
  padding: 10px;
  font-size: 4.5rem;

  &::after {
    content: '/'
  }

  &:last-child::after {
    content: ' '
  }
} @media${device.mobileM} {
  padding: 0px;
  margin: 0px;
  width: 30%;

  &:first-child {
    padding-left: 20px;
  }
}
`

export const TimeFieldStyle = styled.div`
@media${device.desktop} {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  width: 30%;
  margin: 20px 0px 0px 0px;
} @media${device.tablet} {
  padding-left: 30px;
} @media${device.mobileL} {
  justify-content: normal;
  align-items: flex-start;
  padding-left: 20px;
  width: 100%;
} @media${device.mobileM} {
  width: 100%;
  margin: 0px;
  padding: 0px;

}
`
export const Time = styled.time`
@media${device.desktop} {
  font-size: 4rem;
  font-family: SourceSansProBold;
  color: ${color.red};
} @media${device.laptopL} {
  font-size: 3rem;
} @media${device.mobileM} {
  padding-left: 20px;
}

`
/* /End introduction */

/* start main hecht image section before footer */
export const ImageSection = styled.section`
@media${device.desktop} {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: url(${HechtStars});
  background-size: contain;
} @media${device.tablet} {
  height: 550px;
  background-image: none;

} @media${device.mobileL} {
  height: 350px;
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
} @media${device.tablet} {
  background-size: contain;
  width: 100%;
  height: 100%
}

`

export const ImgTitle = styled.h4`
@media${device.desktop} {
  color: ${color.red};
  font-size: 3rem;
  letter-spacing: 2.5px;
  font-weight: bold;
  font-family: SourceSansProBold;
  padding-bottom: 30px;
  width: 50%;
  text-align: right;
} @media${device.laptopL} {
  font-size: 3rem;
} @media${device.tablet} {
  width: 100%;
  text-align: center;
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
  height: 50vh;

} @media${device.laptopL} {

} @media${device.laptop} {
  height: 700px
} @media${device.tablet} {
  height: 1000px;
  flex-direction: column;
} @media${device.mobileL} {
  height: 900px;
  padding-top: 30px;
} @media${device.mobileM} {
  height: 900px;
}

`


export const EventInfoSection = styled.section`
@media${device.desktop} {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  margin-right: 20px;
} @media${device.laptopL} {

} @media${device.laptop} {
  flex-direction: column;
  height: 1200px;

} @media${device.tablet} {

} @media${device.mobileL} {

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
} @media${device.laptop} {
  width: 100%;
} @media${device.tablet} {
  width: 100%;
  margin: 0px;
  padding-bottom: 30px;
} @media${device.mobileL} {
  padding-top: 0px;
  flex-direction: row;
  width: 100%;
  height: 1900px;
}
`
export const OuterRight = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: row;
  width: 50%;
  height: 100%;
  margin: 30px;

} @media${device.laptopL} {
  flex-direction: column;
} @media${device.laptop} {
  width: 100%;
  margin: 20px;
} @media${device.tablet} {
  padding-top: 20px;
  margin: 0px;

} @media${device.mobileL} {

}

`
export const ContactBox = styled.div`
@media${device.desktop} {
  box-sizing: border-box;
  width: 50%;
  height: 50%;
  padding: 20px 20px 10px 10px;
  justify-content: center;
} @media${device.laptopL} {
  width: 50%;
  font-size: 1.4rem

} @media${device.tablet} {
  width: 50%;
  font-size: 1.4rem;
  padding: 20px;
  height: 300px;
} @media${device.mobileL} {
  width: 100%;
  height: 280px;
  color: purple;
}`

export const AnchorStyle = styled.a`
@media${device.desktop} {
  color: ${color.grey};
  font-size: 2rem;
  font-family: SourceSansProLight;
  text-decoration: none;
} @media${device.laptopL} {
  font-size: 2rem
}

`

export const DirectionBox = styled.div`
@media${device.desktop} {
  width: 50%;
  height: 50%;
  padding: 20px;
  box-sizing: border-box;
} @media${device.tablet} {
  height: 220px;
} @media${device.mobileL} {
  width: 100%;
  height: 250px;
}
`
export const CovidBox = styled.div`
@media${device.desktop} {
  display: block;
  width: 100%;
  height: 50%;
  padding: 20px;
} @media${device.tablet} {
  margin-bottom: 50px;
  width: 100%;
} @media${device.mobileL} {
  padding: 20px;
  width: 90%;
}

`

export const SpanStyle = styled.span`
@media${device.desktop} {
  font-weight: bold;
  font-family: SourceSansProBold;
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${color.grey}
} @media${device.laptopL} {
  font-size: 2rem;
}

`

export const DetailsTitle = styled.h4`
@media${device.desktop} {
  font-size: 2.5rem;
  font-family: SourceSansProBold;
  color: ${color.red};
  padding-bottom: 40px;
  text-transform: uppercase;
} @media${device.laptopL} {
  font-size: 2.5rem
} @media${device.mobileL} {
  font-size: 2rem
}
`

export const UlStyle = styled.ul`
  padding: 0px;
  margin: 0px;
`
export const CovidBody = styled.p`
@media${device.desktop} {
  box-sizing: border-box;
  font-size: 2rem;
  font-family: SourceSansProLight;
  color: ${color.grey};
  padding-right: 20px;
  width: 130%;
} @media${device.laptopL} {
  font-size: 2rem;
  padding-right: 20px;
} @media${device.tablet} {

} @media${device.mobileL} {
  font-size: 1.3rem
}
`

export const ShuttleBody = styled.p`
@media${device.desktop} {
  box-sizing: border-box;
  font-size: 2rem;
  font-family: SourceSansProLight;
  color: ${color.grey};
  padding-right: 20px;
  width: 80%;
} @media${device.laptopL} {
  font-size: 2rem;
  padding-right: 20px;
} @media${device.tablet} {

} @media${device.mobileL} {
  font-size: 2rem;
  width: 100%;
}
`

export const CovidContent = styled.p`
@media${device.desktop} {
  box-sizing: border-box;
  font-size: 2rem;
  font-family: SourceSansProLight;
  color: ${color.grey};
  padding-right: 20px;
  width: 100%;
} @media${device.laptopL} {
  font-size: 2rem;
  padding-right: 20px;
} @media${device.tablet} {

} @media${device.mobileL} {
  font-size: 2rem;
  width: 100%;
}
`
/*Anmeldesection*/

export const FeedbackSection = styled.section`
@media${device.desktop} {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${color.red};
  background-image: url(${stripes});
  background-size: contain;
} @media${device.laptop} {
  height: 1700px;
} @media${device.laptopL} {
  flex-direction: column;
  height: 1500px;
} @media${device.tablet} {
  height: 1500px;
} @media${device.mobileL} {
  height: 1400px;
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
  box-sizing: border-box;
  padding-right: 30px;
} @media${device.laptop} {
  width: 100%;
} @media${device.laptopL} {
  flex-direction: column;
} @media${device.tablet} {
  width: 100%;
  height: 80%
} @media${device.mobileL} {
}
`


export const OverNightTitle = styled.h4`
@media${device.desktop} {
  font-size: 2.5rem;
  font-weight: bold;
  font-family: SourceSansProBold;
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
  margin: 40px;
  font-family: SourceSansProBold;

} @media${device.laptopL} {
  font-size: 4rem;
  padding-top: 40px;
} @media${device.mobileL} {
  font-size: 2.3rem;
}
`


export const TimeStyle = styled.span`
@media${device.desktop} {
  font-weight: bold;
  text-transform: uppercase;
  color: ${color.grey};
  font-family: SourceSansProBold;
} @media${device.laptopL} {
  font-size: 4rem;
} @media${device.mobileL} {
  font-size: 2.3rem
}

`

export const OverNightBox = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: column;
  height: 70%;

} @media${device.laptopL} {
  margin: 0px 0px 0px 40px;
} @media${device.mobileL} {
  margin: 20px
}`

export const OverNightBody = styled.p`
@media${device.desktop} {
  font-size: 2rem;
  font-family: SourceSansProLight;
  color: ${color.grey};
  width: 80%;
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
  width: 100%;
  margin: 15px;
}
`

export const AnmeldeLabel = styled.label`
@media${device.desktop} {

  color: ${color.grey};
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
  color: ${color.grey};
  font-family: SourceSansProLight;
} @media${device.mobileL} {
  font-size: 1rem;

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
  font-family: SourceSansProBold;


  &::placeholder {
    color: ${color.grey};
    text-transform: uppercase;
    padding: 5px 0px 5px 20px;
    font-size: 0.8rem;
    font-weight: bold;
    font-family: SourceSansProLight;
  }
} @media${device.mobileL} {
  width: 90%
}
`
export const AnmeldeInputBegleitung = styled.input`
@media${device.desktop} {
  display: ${props => (props.visible ? "block" : "none")};
  height: 40px;
  width: 400px;
  margin: 10px 0px 5px 0px;
  font-family: SourceSansProBold;

  &::placeholder {
    color: ${color.grey};
    text-transform: uppercase;
    padding: 5px 0px 5px 20px;
    font-size: 0.8rem;
    font-family: SourceSansProLight;
    font-weight: bold;
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
  font-family: SourceSansProBold;

  &::placeholder {
    color: ${color.grey};
    text-transform: uppercase;
    padding: 5px 0px 5px 20px;
    font-size: 0.8rem;
    font-family: SourceSansProLight;
    font-weight: bold;
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
  background-color: ${color.grey};
  color: white;
  font-size: 2rem;
  font-weight: bold;
  transition: 0.5s ease-out;
  margin-top: 40px;
  font-family: SourceSansProBold;

  &:hover {
    background-color: white;
    color: ${color.grey};
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


/*updated contact direction and shuttle field*/

export const ContactField = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 90px 30px 30px;
  box-sizing: border-box;
  flex-grow: 1;

} @media${device.mobileM} {
  padding: 30px 10px 30px 20px;
}`

export const DirectionField = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
  padding: 30px 90px 30px 30px;
  box-sizing: border-box;

} @media${device.mobileM} {
  padding: 30px 10px 30px 20px;
}`

export const ShuttleField = styled.div`
@media${device.desktop} {
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;


} @media${device.mobileM} {
  padding: 30px 10px 30px 20px;
}`

export const CovidTestField = styled.div`
@media${device.desktop} {
  height: 50vh;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
} @media${device.laptopL} {
  height: 600px;
} @media${device.tablet} {
  height: 700px;
} @media${device.mobileL} {
  height: 700px;
  font-size: 2rem;
  width: 100%;
} @media${device.mobileM} {
  height: 1200px;
  padding: 100px 10px 30px 20px;
}
`
export const Klammertext = styled.span`
@media${device.desktop}{
  font-size: 1.5rem
}`

/* /updated contact direction and shuttle field*/

/*start FOOTER section*/
export const FooterArea = styled.footer`
@media${device.desktop} {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 30vh;
  background-image: url(${HechtFooter});
  background-size: contain;
  background-repeat: no-repeat;
} @media${device.tablet} {
  min-height: 140px;
} @media${device.mobileL} {
  min-height: 200px;
  background-size: cover;
}


`
export const FooterLogo = styled.div`
@media${device.desktop} {
  padding-left: 50px;
} @media${device.tablet} {
  justify-content: center;
}

`

export const ImgStyle = styled.img`
@media${device.desktop} {
  height: 100px;
} @media${device.tablet} {
  height: 80px;
  margin: auto;
} @media${device.mobileM} {
  height: 60px;
}
`

