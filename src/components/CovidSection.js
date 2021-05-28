import React from "react";
import {AnchorStyle, CovidBody, CovidTestField, DetailsTitle, SpanStyle} from "../styled";

function CovidSection() {
    return (
        <CovidTestField>
            <DetailsTitle>Die Guten 3G´s - Einlass sichern</DetailsTitle>
            <CovidBody>Das Betreten des Sommerfestes für alle Gäste ab 15 Jahren ist ausschließlich wie folgt
                möglich:<br/>
                <SpanStyle>Genesen</SpanStyle> ( Vorlage der Genesung in Kombination mit einem PCR Test -nicht
                älter als 6 Monate )<br/>
                <SpanStyle>Geimpft</SpanStyle> ( Vorlage des Impfausweises )<br/>
                <SpanStyle>Getestet</SpanStyle> ( PCR Test, höchstens 48h alt )<br/>
                Bitte Identitätsnachweis mitführen! <br/>
                Mögliche Teststationen finden Sie <AnchorStyle
                    href="https://www.landkreis-pfaffenhofen.de/landratsamt/informationen-und-aktuelle-meldungen-zum-coronavirus/testmoeglichkeiten/"
                    target="_blank"><SpanStyle>HIER</SpanStyle></AnchorStyle></CovidBody>
        </CovidTestField>
    )
}

export default CovidSection