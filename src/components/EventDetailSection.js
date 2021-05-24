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
                        href="tel:004984418956700" aria-label="+49 8441 895 6700">+49 8441 89 56 700</AnchorStyle><br/><AnchorStyle
                        href="mailto:event@hecht.eu" aria-label="event@hecht.eu">event@hecht.eu</AnchorStyle></CovidBody>
                </ContactBox>
                <DirectionBox>
                    <DetailsTitle>Anfahrt</DetailsTitle>
                    <CovidBody><SpanStyle>HECHT Technologie</SpanStyle><br/><AnchorStyle href="https://goo.gl/maps/mFgtMfEFe1DtekK5A" aria-label="Routenplaner öffnen" title="HECHT Technologie Pörnbach Google Maps Navigation" target="_blank">Am Anger 13<br/>85309
                        Pörnbach</AnchorStyle></CovidBody>
                </DirectionBox>
                <CovidBox>
                    <DetailsTitle>Covid19-Schnellteststation</DetailsTitle>
                    <CovidBody>Wir nehmen Ihre und unsere Gesundheit ernst und lassen bei jedem Gast vor Betreten des Festgeländes einen professionellen Corona Test durch das BRK durchführen.</CovidBody>
                </CovidBox>
            </OuterLeft>
            <OuterRight>
                <CovidBox>
                    <DetailsTitle>Shuttleservice</DetailsTitle>
                    <CovidBody><SpanStyle>Ab 22 Uhr</SpanStyle> bieten wir Fahrten zwischen Pfaffenhofen und Pörnbach an. Bitte geben Sie in der Anmeldung an, ob Sie diesen nutzen möchten.</CovidBody>
                </CovidBox>

            </OuterRight>
        </EventInfoSection>
    )
}

export default EventDetailSection