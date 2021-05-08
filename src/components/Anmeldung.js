import React, {useState} from "react";
import {FormLabel, Input, InputButton, OuterLeft, AnmeldungRight, TimeStyle, AnmeldeTitel, OverNightBox, OverNightTitle} from "../styled";


function Anmeldung() {

    const [attendees, setAttendees] = useState()


    return (
        <>

        <OuterLeft>
            <AnmeldeTitel>Wir bitten um Rückmeldung bis zum <TimeStyle>xx.xx.xx</TimeStyle></AnmeldeTitel>
            <form>
                <FormLabel>Anmeldung zum Hecht-Sommerfest</FormLabel><br/>
                <Input type="integer" placeholder="Vor- und Zuname" onChange={e => {
                    setAttendees(e.target.value)
                }}/>
                <InputButton>+</InputButton>

                <br/>

                <Input type="text" placeholder="Vor- und Zuname der zusätzlichen Begleitperson" onChange={e => {
                    setAttendees(e.target.value)
                }}/>
                <br/>
                <InputButton type="submit" value="Submit">Anmelden</InputButton>
                <InputButton>Nein</InputButton>
            </form>
        </OuterLeft>
        <AnmeldungRight><OverNightBox><OverNightTitle>Übernachtungsempfehlung</OverNightTitle> Hotel Bogenrieder in Pörnbach</OverNightBox></AnmeldungRight>
        </>
    )
}

export default Anmeldung