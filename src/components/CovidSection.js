import React from "react";
import {AnchorStyle, CovidBody, CovidContent, CovidTestField, DetailsTitle, SpanStyle} from "../styled";

function CovidSection() {
    return (
        <CovidTestField>
            <DetailsTitle>Die Guten 3G´s - Einlass sichern</DetailsTitle>
            <CovidContent>Das Betreten des Sommerfestes für alle Gäste ab 15 Jahren ist ausschließlich wie folgt
                möglich:<br/>
                <SpanStyle>Genesen</SpanStyle> (Vorlage der Genesung in Kombination mit einem positiven PCR Test - mind. 28 Tage und max. 6 Monate alt)<br/>
                <SpanStyle>Geimpft</SpanStyle> ( Vorlage eines gültigen Nachweises )<br/>
                <SpanStyle>Getestet</SpanStyle> (Vorlage eines PCR Test, höchstens 48h alt und eines Antigentest, höchtens 24h alt)<br/>
                Bitte Identitätsnachweis mitführen! <br/>
                Mögliche Teststationen finden Sie <AnchorStyle
                    href="https://www.landkreis-pfaffenhofen.de/landratsamt/informationen-und-aktuelle-meldungen-zum-coronavirus/testmoeglichkeiten/"
                    target="_blank"><SpanStyle>HIER</SpanStyle></AnchorStyle></CovidContent>
        </CovidTestField>
    )
}

export default CovidSection