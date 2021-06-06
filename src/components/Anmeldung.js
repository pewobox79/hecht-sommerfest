import React, {useState} from "react";
import PlusIcon from '../assets/plus-sign.png'
import Uebernachtung from "./Uebernachtung";
import {
    OuterLeft,
    AnmeldungRight,
    Anmeldeform,
    AnmeldeLabel,
    TimeStyle,
    AnmeldeTitel,
    OverNightBox,
    OverNightTitle,
    AnmeldeButton,
    OverNightBody, AnmeldeInput, AnmeldeInputBegleitung, AnmeldeCheckbox, AnmeldeBemerkung, CheckboxLabel, OuterRight
} from "../styled";
import Anmeldeformular from "./Anmeldeformular";
import Anmeldeplatzhalter from "./Anmeldeplatzhalter";


function Anmeldung() {
    return (
        <>
            <OuterLeft>
            <Anmeldeformular/>
            </OuterLeft>
            <AnmeldungRight>
                <Uebernachtung/>
            </AnmeldungRight>
        </>
    )
}

export default Anmeldung