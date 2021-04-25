import React from "react";
import {FooterArea} from "../styled";

import styled from "styled-components";

const FooterBody = styled.div`width: 70%; margin: auto; background-color: darkgray; box-sizing: border-box;`

const FooterText = styled.h5 `font-size: 2rem;`

function Footer (){
    return(
        <FooterArea>
            <FooterBody>
                <FooterText>Wir freuen uns auf ihr kommen!</FooterText>

            </FooterBody>
        </FooterArea>


    )
}

export default Footer
