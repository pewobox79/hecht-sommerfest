import React from "react";
import {ShuttleField, DetailsTitle, OuterRight, SpanStyle, ShuttleBody} from "../styled";

function Shuttle(){
    return(
        <ShuttleField>
                <DetailsTitle>Shuttleservice</DetailsTitle>
            <ShuttleBody><SpanStyle>Um 22:30, 00.30 Uhr</SpanStyle> und <SpanStyle>02:30 Uhr</SpanStyle> bieten wir einen Shuttle zwischen Pörnbach, Pfaffenhofen
                    und Schrobenhausen an. Bitte geben Sie uns bei Ihrer Anmeldung Bescheid, wenn Sie diesen nutzen
                    möchten.</ShuttleBody>
        </ShuttleField>

    )
}

export default Shuttle