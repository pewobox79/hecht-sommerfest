import React from "react";
import {
    EventInfoSection,
    OuterLeft,
    ContactBox,
    DirectionBox,
    CovidBox,
    ContactTitle,
    DirectionTitle,
    CovidTitle,
    ContactBody,
    DirectionBody,
    CovidBody, OuterRight
} from "../styled";

function EventDetailSection() {

    return (
        <EventInfoSection>
            <OuterLeft>
                <ContactBox>
                    <ContactTitle>Kontakt</ContactTitle>
                    <ContactBody>Yessica Wolf<br/><a href="tel:004984418956700">+49 8441 89 56 700</a><br/><a href="mailto:event@hecht.eu">Email Yessica</a></ContactBody>
                </ContactBox>
                <DirectionBox>
                    <DirectionTitle>Anfahrt</DirectionTitle>
                    <DirectionBody>HECHT Technologie<br/>Am Anger 13<br/>85309 Pörnbach</DirectionBody>
                </DirectionBox>
                <CovidBox>
                    <CovidTitle>Covid19-Schellteststation</CovidTitle>
                    <CovidBody>Wir nehmen Ihre und unsere Gesundheit ernst und lassen jedem Gast vor Betreten des Festgeländes einen professionellen Corona Tests durch das BRK durchführen</CovidBody>
                </CovidBox>
            </OuterLeft>

        </EventInfoSection>
    )
}

export default EventDetailSection