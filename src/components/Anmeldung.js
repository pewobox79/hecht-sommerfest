import React from "react";
import Uebernachtung from "./Uebernachtung";
import {
    OuterLeft,
    AnmeldungRight,
} from "../styled";
import Anmeldeformular from "./Anmeldeformular";
import Anmeldeplatzhalter from "./Anmeldeplatzhalter";
import AnmeldeFormularCovid from "./AnmeldeFormularCovid";


function Anmeldung() {
    return (
        <>
            <OuterLeft>
            <Anmeldeformular/>
                <AnmeldeFormularCovid/>
            </OuterLeft>
            <AnmeldungRight>
                <Uebernachtung/>
            </AnmeldungRight>
        </>
    )
}

export default Anmeldung