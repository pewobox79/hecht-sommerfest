import React from "react";
import hecht from '../assets/images/HECHT_Einladungskarte_Motiv_MA-Header.jpg';

import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  background-image: url(${hecht});
  background-size: cover;
  align-items: center;
`

const Intro = styled.div`
  width: 50%;
  position: absolute;
 padding-left: 10%;

`
const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 15px;
`
const Nav = styled.nav`
  height: 50px;
  margin: 0px;
`

const List = styled.li`
  text-transform: uppercase;
  list-style-type: none;
  color: white;
  float: left;
`

function MainHeader() {


    return (
        <Wrapper>
            <Intro>
                <Title>Einladung zum <br/>Sommerfest</Title>
                <Nav>
                    <ul>
                        <a href="#details"><List>Details | </List></a>
                        <a href="#Anmeldung"><List>| Anmeldung</List></a>
                    </ul>
                </Nav>
            </Intro>
        </Wrapper>
    )
}

export default MainHeader