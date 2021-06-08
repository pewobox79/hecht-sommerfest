import React from "react";
import Uebernachtung from "./Uebernachtung";
import {
    OuterLeft,
    AnmeldungRight,
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