import React from "react";
import {
    EventInfoSection,
    OuterLeft,
    ContactBox,
    DirectionBox,
    CovidBox,
    DetailsTitle,
    AnchorStyle,
    CovidBody,
    OuterRight,
    SpanStyle, AnmeldeInput
} from "../styled";

function EventDetailSection() {

    return (
        <EventInfoSection>
            <OuterLeft>
                <ContactBox>
                    <DetailsTitle>Kontakt</DetailsTitle>
                    <CovidBody><SpanStyle>Yessica Wolf</SpanStyle><br/>
                        <AnchorStyle
                            href="tel:004984418956700" aria-label="+49 8441 895 6700">+49 8441 89 56
                            700</AnchorStyle><br/><AnchorStyle
                            href="mailto:event@hecht.eu"
                            aria-label="event@hecht.eu">event@hecht.eu</AnchorStyle></CovidBody>
                </ContactBox>
                <DirectionBox>
                    <DetailsTitle>Anfahrt</DetailsTitle>
                    <CovidBody><SpanStyle>HECHT Technologie</SpanStyle><br/><AnchorStyle
                        href="https://goo.gl/maps/mFgtMfEFe1DtekK5A" aria-label="Routenplaner öffnen"
                        title="HECHT Technologie Pörnbach Google Maps Navigation" target="_blank">Am Anger 13<br/>85309
                        Pörnbach</AnchorStyle></CovidBody>
                </DirectionBox>
                <CovidBox>
                    <DetailsTitle>Die Guten 3G´s - Einlassvoraussetzungen</DetailsTitle>
                    <CovidBody>Das Betreten des Sommerfestes für alle Gäste ab 15 Jahren ist ausschließlich wie folgt
                        möglich:<br/>
                        <SpanStyle>Genesen</SpanStyle> ( Vorlage der Genesung in Kombination mit einem PCR Test -nicht
                        älter als 6 Monate )<br/>
                        <SpanStyle>Geimpft</SpanStyle> ( Vorlage des Impfausweises )<br/>
                        <SpanStyle>Getestet</SpanStyle> ( PCR Test, höchstens 48h alt )<br/>
                        Bitte Identitätsnachweis mitführen! <br/>
                        Mögliche Teststationen finden Sie <AnchorStyle
                            href="https://www.landkreis-pfaffenhofen.de/landratsamt/informationen-und-aktuelle-meldungen-zum-coronavirus/testmoeglichkeiten/"
                            target="_blank"><strong>HIER</strong></AnchorStyle></CovidBody>
                </CovidBox>
            </OuterLeft>
            <OuterRight>
                <CovidBox>
                    <DetailsTitle>Shuttleservice</DetailsTitle>
                    <CovidBody><SpanStyle>Ab 22 Uhr</SpanStyle> bieten wir einen Shuttle von Pörnbach nach Pfaffenhofen
                        und Schrobenhausen an. Bitte geben Sie uns bei Ihrer Anmeldung Bescheid, wenn Sie diesen nutzen
                        möchten.</CovidBody>
                </CovidBox>

            </OuterRight>
        </EventInfoSection>
    )
}

export default EventDetailSection