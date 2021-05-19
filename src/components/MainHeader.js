import React from "react";
import {AnchorStyle, UlStyle, Wrapper, MainHeaderStyle, Intro, Title, Nav, List} from "../styled";


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