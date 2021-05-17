import React from "react";
import {
    EventInfoSection,
    OuterLeft,
    ContactBox,
    DirectionBox,
    CovidBox,
    DetailsTitle,
    UlStyle,
    AnchorStyle,
    CovidBody, OuterRight, SpanStyle, ServiceBox, ListStyle, ShuttleTimeStyle
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
                    <DetailsTitle>Covid19-Schellteststation</DetailsTitle>
                    <CovidBody>Wir nehmen Ihre und unsere Gesundheit ernst und lassen jedem Gast vor Betreten des
                        Festgeländes einen professionellen Corona Tests durch das BRK durchführen</CovidBody>
                </CovidBox>
            </OuterLeft>
            <OuterRight>
                <CovidBox>
                    <DetailsTitle>Shuttleservice</DetailsTitle>
                    <CovidBody><SpanStyle>Unser HECHT Shuttle-Stadtbus fährt folgende Stationen an:</SpanStyle>
                        <UlStyle>
                            <ListStyle><ShuttleTimeStyle>22:00 Uhr: </ShuttleTimeStyle>Hohenwart-Tegernbach-Waidhofen-Schrobenhausen</ListStyle>
                            <ListStyle><ShuttleTimeStyle>22:30 Uhr: </ShuttleTimeStyle>Pfaffenhofen</ListStyle>
                            <ListStyle><ShuttleTimeStyle>00:00 Uhr: </ShuttleTimeStyle>Hohenwart-Tegernbach-Waidhofen-Schrobenhausen</ListStyle>
                            <ListStyle><ShuttleTimeStyle>00:30 Uhr: </ShuttleTimeStyle>Pfaffenhofen</ListStyle>
                            <ListStyle><ShuttleTimeStyle>02:00 Uhr: </ShuttleTimeStyle>Hohenwart-Tegernbach-Waidhofen-Schrobenhausen</ListStyle>
                            <ListStyle><ShuttleTimeStyle>02:30 Uhr: </ShuttleTimeStyle>Pfaffenhofen</ListStyle>
                        </UlStyle></CovidBody>
                </CovidBox>
            </OuterRight>
        </EventInfoSection>
    )
}

export default EventDetailSection