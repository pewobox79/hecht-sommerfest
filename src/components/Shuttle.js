import React from "react";
import {ShuttleField, DetailsTitle, OuterRight, SpanStyle, ShuttleBody} from "../styled";

function Shuttle() {
    return (
        <ShuttleField>
            <DetailsTitle>Shuttleservice</DetailsTitle>
            <ShuttleBody>Wir bieten einen Shuttle zwischen <SpanStyle>Pörnbach, Pfaffenhofen</SpanStyle> und <SpanStyle>Schrobenhausen</SpanStyle> an. Bitte gib uns bei Deiner Anmeldung
                Bescheid, ob Du diesen nutzen möchtest.</ShuttleBody>
        </ShuttleField>

    )
}

export default Shuttle