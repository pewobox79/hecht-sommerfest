import React from "react";
import EventDetailSection from './EventDetailSection'
import {
    AnchorStyle,
    ContactField,
    CovidBody,
    CovidTestField,
    DetailsTitle,
    DirectionField,
    EventWrapper,
    ShuttleField, SpanStyle, ShuttleBody
} from "../styled";


function EventDetails() {
    return (
        <EventWrapper id="details">
            <ContactField>
                <DetailsTitle>Kontakt</DetailsTitle>
                <CovidBody><SpanStyle>Yessica Wolf</SpanStyle><br/>
                    <AnchorStyle
                        href="tel:004984418956700" aria-label="+49 8441 895 6700">+49 8441 89 56
                        700</AnchorStyle><br/><AnchorStyle
                        href="mailto:event@hecht.eu"
                        aria-label="event@hecht.eu">event@hecht.eu</AnchorStyle></CovidBody>
            </ContactField>
            <DirectionField>
                <DetailsTitle>Anfahrt</DetailsTitle>
                <CovidBody><SpanStyle>HECHT Technologie</SpanStyle><br/><AnchorStyle
                    href="https://goo.gl/maps/mFgtMfEFe1DtekK5A" aria-label="Routenplaner öffnen"
                    title="HECHT Technologie Pörnbach Google Maps Navigation" target="_blank">Am Anger 13<br/>85309
                    Pörnbach</AnchorStyle></CovidBody>
            </DirectionField>
            <ShuttleField>
                <DetailsTitle>Shuttleservice</DetailsTitle>
                <ShuttleBody><SpanStyle>Ab 22 Uhr</SpanStyle> bieten wir einen Shuttle von Pörnbach nach Pfaffenhofen
                    und Schrobenhausen an. Bitte geben Sie uns bei Ihrer Anmeldung Bescheid, wenn Sie diesen nutzen
                    möchten.</ShuttleBody>
            </ShuttleField>
        </EventWrapper>
    )
}

export default EventDetails