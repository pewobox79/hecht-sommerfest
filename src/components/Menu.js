import React from "react";
import hecht from '../assets/hecht-headoffice.jpg';

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  background-image: url(${hecht});
  background-size: cover;
  align-items: center;
`

const Intro = styled.div`
  width: 50%;
  background-color: darkgray;
  position: absolute;
  right: 0px;

`
const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 15px;
`
const Nav = styled.nav`width: 100%; display: flex; align-items: center; justify-content: space-between; flex-direction: column;`
const List = styled.li`text-transform: uppercase; list-style-type: none; color: white; float: left `

function Menu() {


    return (
        <Wrapper>
            <Intro>
                <Title>Einladung zum <br/>Sommerfest</Title>
                <Nav>
                <ul>
                    <a href="#details"><List>Details |  </List></a>
                    <a href="#Anmeldung"><List>| Anmeldung</List></a>
                </ul>
                </Nav>
            </Intro>
        </Wrapper>
    )
}

export default Menu