import React from "react";
import Welcome from "./Welcome";
import DateField from "./DateField";
import TimeField from "./TimeField";
import {IntroSectionStyle} from "../styled";


function IntroSection() {

    return (
        <IntroSectionStyle>
            <Welcome/>
            <DateField/>
            <TimeField/>
        </IntroSectionStyle>
    )
}
export default IntroSection