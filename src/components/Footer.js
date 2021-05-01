import React from "react";
import {FooterArea, FooterLogo} from "../styled";
import HechtLogo from '../assets/images/HECHT_Logo_Redesign_weiß.png';

function Footer() {
    return (
        <FooterArea>
            <FooterLogo>
                <img style={{height: "100px"}} src={HechtLogo}/>
            </FooterLogo>

        </FooterArea>

    )
}

export default Footer
