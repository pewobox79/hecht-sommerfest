import React, {useState} from "react";
import {
    Input,
    OuterLeft,
    AnmeldungRight,
    Anmeldeform,
    AnmeldeLabel,
    TimeStyle,
    AnmeldeTitel,
    OverNightBox,
    OverNightTitle,
    AnmeldeButton,
    OverNightBody, AnmeldeInput, AnmeldeCheckbox, AnmeldeBemerkung
} from "../styled";


function Anmeldung() {

    const [attendees, setAttendees] = useState({Name: "", Name2: "", Bemerkung: ""})

    function handleChange(e) {
        setAttendees({name: e.target.value})

    }

    return (
        <>

            <OuterLeft>
                <AnmeldeTitel>Wir bitten um Rückmeldung bis zum <TimeStyle>xx.xx.xx</TimeStyle></AnmeldeTitel>
                <Anmeldeform>
                    <AnmeldeLabel>Anmeldung für den Familiennachmittag</AnmeldeLabel>
                    <AnmeldeCheckbox type="checkbox" id="ja1" name="vehicle1" value="Ich komme zum Event allein"/>
                    <AnmeldeCheckbox type="checkbox" id="ja2" name="vehicle1"
                                     value="Ich komme mit Begleitung zum Event"/>
                    <AnmeldeCheckbox type="checkbox" id="nein" name="vehicle1"
                                     value="Nein, ich kann leider nicht kommen!"/>
                    <AnmeldeInput type="text" value={e => (e.target.value)} onChange={handleChange}
                                  placeholder="Vor- und Zuname"/>
                    <AnmeldeInput type="text" value={e => (e.target.value)} onChange={handleChange}
                                  placeholder="Vor-und Zuname der zusätzlichen Begleitperson"/>
                    <AnmeldeBemerkung type="text" value={e => (e.target.value)} onChange={handleChange}
                                      placeholder="Bemerkung"/>

                    <AnmeldeButton>Abschicken</AnmeldeButton>
                </Anmeldeform>
            </OuterLeft>
            <AnmeldungRight>
                <OverNightBox><OverNightTitle>Übernachtungsempfehlung</OverNightTitle>
                    <OverNightBody><strong>Hotel Bogenrieder in
                        Pörnbach</strong><br/>Sie möchten gern Übernachten? <br/>Wir empfehlen Ihnen das zu Fuß
                        erreichbare Hotel Bogenrieder.</OverNightBody>
                    <a href="https://hotel-bogenrieder.de/hotel/online-buchung/"
                       target="_blank"><AnmeldeButton>Reservieren</AnmeldeButton></a>
                </OverNightBox>
            </AnmeldungRight>
        </>
    )
}

export default Anmeldung