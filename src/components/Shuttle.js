import React from "react";
import {CovidBody, CovidBox, DetailsTitle, OuterRight, SpanStyle} from "../styled";

function Shuttle(){
    return(
            <CovidBox>
                <DetailsTitle>Shuttleservice</DetailsTitle>
                <CovidBody><SpanStyle>Ab 22 Uhr</SpanStyle> bieten wir einen Shuttle von Pörnbach nach Pfaffenhofen
                    und Schrobenhausen an. Bitte geben Sie uns bei Ihrer Anmeldung Bescheid, wenn Sie diesen nutzen
                    möchten.</CovidBody>
            </CovidBox>

    )
}

export default Shuttle