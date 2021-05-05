import React from "react";
import EventDetailSection from './EventDetailSection'

import styled from "styled-components";

const EventWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`


function EventDetails() {
    return (
        <EventWrapper id="details">
            <EventDetailSection />
        </EventWrapper>

    )
}

export default EventDetails