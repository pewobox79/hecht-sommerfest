import React from "react";
import {AnchorStyle, CovidBody, CovidContent, CovidTestField, DetailsTitle, SpanStyle, Klammertext} from "../styled";

function CovidSection() {
    return (
        <CovidTestField>
            <DetailsTitle>Die Guten 3G´s - Einlass sichern</DetailsTitle>
            <CovidContent>Das Betreten des Sommerfestes ist ausschließlich wie folgt möglich:<br/>
                <SpanStyle>Genesen</SpanStyle> <Klammertext>(Vorlage der Genesung in Kombination mit einem positiven PCR
                    Test - mind. 28 Tage und max. 6 Monate alt)</Klammertext><br/>
                <SpanStyle>Geimpft</SpanStyle> <Klammertext>( Vorlage eines gültigen Nachweises )</Klammertext><br/>
                <SpanStyle>Getestet</SpanStyle> <Klammertext>(Vorlage eines PCR Test, höchstens 48h alt oder eines
                    Antigentest, höchtens 24h alt)</Klammertext><br/>
                Bitte Identitätsnachweis mitführen! <br/>
                Mögliche Teststationen finden Sie <AnchorStyle
                    href="https://www.landkreis-pfaffenhofen.de/landratsamt/informationen-und-aktuelle-meldungen-zum-coronavirus/testmoeglichkeiten/"
                    target="_blank"><SpanStyle>HIER</SpanStyle></AnchorStyle></CovidContent>
        </CovidTestField>
    )
}

export default CovidSection