import React from "react";

import styled from "styled-components";

const Geschenke = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  padding: 10px;
`
const ShuttleService = styled.div`;
  box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  padding: 10px;
`

const Hotel = styled.div`box-sizing: border-box;
  width: 100%;
  min-height: 100%;
  padding: 10px;`

const EventSpan = styled.span`
  font-size: 2rem;
  margin-bottom: 10px;

`

const DetailTitle = styled.h3`font-size: 3rem;
  color: red;
  font-weight: bold;
  text-transform: uppercase`

function EventDetailSection() {

    return (
        <>
            <Geschenke>
                <DetailTitle>Kontakt</DetailTitle>
                <EventSpan>Yessica Wolf<br/>
                    <a href="tel:0049 8441 89 56 700">+49 8441 89 56 700</a><br/>
                    <a href="mailto:event@hecht.eu">event@hecht.eu</a></EventSpan>

            </Geschenke>

            <ShuttleService>
                <DetailTitle>Shuttleservice</DetailTitle><EventSpan>Unser HECHT Shuttle-Stadtbus fährt folgende
                Stationen an:<br/>
                Pörnbach – Reichertshofen - Langenbruck – Schrobenhausen - Pfaffenhofen<br/>
                Abfahrt jeweils um 22 Uhr, 0 Uhr und 2 Uhr an unserer HECHT BUS-STATION.</EventSpan>
            </ShuttleService>

            <Hotel>
                <DetailTitle>Übernachtung</DetailTitle><EventSpan><a href="https://hotel-bogenrieder.de/"
                                                                     title="Hotel Bogenrieder Website" target="_blank">Hotel
                Bogenrieder in Pörnbach</a>
                <br/>Ein Kontingent von 22 Zimmer sind bis XX reserviert.</EventSpan>
                <br/>
                <EventSpan><a href="https://www.greendeerhotel.de/" target="_blank">Green Deer Hotel in Reichertshofen</a><br/>
                Ein Kontingent von 30 Zimmern sind bis xx reserviert.
            </EventSpan>
            </Hotel>
        </>
    )
}

export default EventDetailSection