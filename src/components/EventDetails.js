import React from "react";
import EventDetailSection from './EventDetailSection'
import {EventWrapper} from "../styled";


function EventDetails() {
    return (
        <EventWrapper id="details">
            <EventDetailSection />
        </EventWrapper>
    )
}

export default EventDetails