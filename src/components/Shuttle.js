import React from "react";
import {ShuttleField, DetailsTitle, OuterRight, SpanStyle, ShuttleBody} from "../styled";

function Shuttle() {
    return (
        <ShuttleField>
            <DetailsTitle>Shuttleservice</DetailsTitle>
            <ShuttleBody>Ab circa <SpanStyle>22.00 Uhr</SpanStyle> bieten wir einen Shuttle zwischen <SpanStyle>Pörnbach, Pfaffenhofen</SpanStyle> und <SpanStyle>Schrobenhausen</SpanStyle> an. Bitte gib uns bei Deiner Anmeldung
                Bescheid, ob Du diesen nutzen möchtest und welcher Wunschort für Dich optimal wäre. Wir versuchen eine bestmögliche Route zu planen.</ShuttleBody>
        </ShuttleField>

    )
}

export default Shuttle