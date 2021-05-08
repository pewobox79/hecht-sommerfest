import React from "react";
import hecht from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Header.jpg';
import {device} from "../styled/device";
import styled from "styled-components";
import {AnchorStyle, UlStyle} from "../styled";

const Wrapper = styled.section`
  height: 50vh;
  background-image: url(${hecht});
  background-size: cover;
  width: 100%;

`
const MainHeaderStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;`

const Intro = styled.div`
  width: 50%;
  position: absolute;
  padding-left: 10%;

  @media ${device.tablet} {
    width: 100%;
  }

`
const Title = styled.h1`

  @media ${device.desktop} {
    font-size: 6rem;
    color: white;
    text-transform: uppercase;
    font-weight: bolder;
  }
  @media ${device.laptopL} {
    font-size: 4.5rem;
    
  }
  @media ${device.tablet} {
    font-size: 3rem;
  }

  @media ${device.laptop} {
    font-size: 3rem;
  }
`
const Nav = styled.nav`
  height: 50px;
  margin: 0px;
`

const List = styled.li`
  @media ${device.desktop} {
    text-transform: uppercase;
    list-style-type: none;
    color: white;
    float: left;
    font-size: 3rem;
    font-weight: bold;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  
`

function MainHeader() {


    return (
        <Wrapper>
            <MainHeaderStyle>
                <Intro>
                    <Title>Einladung zum <br/>Sommerfest</Title>
                    <Nav>
                        <UlStyle>
                            <AnchorStyle href="#details"><List>Details | </List></AnchorStyle>
                            <AnchorStyle href="#Anmeldung"><List>| Anmeldung</List></AnchorStyle>
                        </UlStyle>
                    </Nav>
                </Intro>
            </MainHeaderStyle>
        </Wrapper>
    )
}

export default MainHeader