import React from "react";
import {FooterArea, FooterLogo, ImgStyle, LegalNote} from "../styled";
import HechtLogo from '../assets/images/HECHT_Logo_Redesign_weiß.png';

function Footer() {
    return (
        <FooterArea>
            <FooterLogo>
                <ImgStyle src={HechtLogo}/>
            </FooterLogo>
        </FooterArea>

    )
}

export default Footer
