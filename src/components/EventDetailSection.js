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
    SpanStyle
} from "../styled";

function EventDetailSection() {

    return (
        <EventInfoSection>
            <OuterLeft>
                <ContactBox>
                    <DetailsTitle>Kontakt</DetailsTitle>
                    <CovidBody><SpanStyle>Yessica Wolf</SpanStyle><br/>
                        <AnchorStyle
                        href="tel:004984418956700" aria-label="+49 8441 895 6700">Telefon</AnchorStyle><br/><AnchorStyle
                        href="mailto:event@hecht.eu" aria-label="event@hecht.eu">Email</AnchorStyle></CovidBody>
                </ContactBox>
                <DirectionBox>
                    <DetailsTitle>Anfahrt</DetailsTitle>
                    <CovidBody><SpanStyle>HECHT Technologie</SpanStyle><br/><AnchorStyle href="https://goo.gl/maps/mFgtMfEFe1DtekK5A" aria-label="Routenplaner öffnen" title="HECHT Technologie Pörnbach Google Maps Navigation" target="_blank">Am Anger 13<br/>85309
                        Pörnbach</AnchorStyle></CovidBody>
                </DirectionBox>
                <CovidBox>
                    <DetailsTitle>Covid19-Schnellteststation</DetailsTitle>
                    <CovidBody>Wir nehmen Ihre und unsere Gesundheit ernst! Das Betreten des Festgeländes ist nur mit einem negativen PCR Test (max. 24h alt), einem Corona-Impfnachweis oder einem Schnelltest durch das BRK vor Ort möglich.</CovidBody>
                </CovidBox>
            </OuterLeft>
            <OuterRight>
                <CovidBox>
                    <DetailsTitle>Shuttleservice</DetailsTitle>
                    <CovidBody>Jeweils um <SpanStyle>22:00, 00:00</SpanStyle> &amp; <SpanStyle>02:00 Uhr</SpanStyle> fährt unser Shuttle nach Schrobenhausen und Pfaffenhofen.</CovidBody>
                </CovidBox>

            </OuterRight>
        </EventInfoSection>
    )
}

export default EventDetailSection