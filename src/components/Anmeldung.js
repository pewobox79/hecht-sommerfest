import React, {useState} from "react";
import PlusIcon from '../assets/plus-sign.png'
import {
    OuterLeft,
    AnmeldungRight,
    Anmeldeform,
    AnmeldeLabel,
    TimeStyle,
    AnmeldeTitel,
    OverNightBox,
    OverNightTitle,
    AnmeldeButton,
    OverNightBody, AnmeldeInput,AnmeldeInputBegleitung, AnmeldeCheckbox, AnmeldeBemerkung, CheckboxLabel
} from "../styled";


function Anmeldung() {

    const [attendees, setAttendees] = useState({Name: "", Name2: "", Bemerkung: ""})
 const [mitBegleitung, setMitBegleitung] = useState(false)



    return (
        <>

            <OuterLeft>
                <AnmeldeTitel>Wir bitten um Rückmeldung bis zum <TimeStyle>xx.xx.xx</TimeStyle></AnmeldeTitel>
                <Anmeldeform action="mailto:pewobox79@gmail.com?subject=Sommerfest" enctype="text/plain">
                    <AnmeldeLabel>Anmeldung</AnmeldeLabel>

                    <AnmeldeCheckbox type="checkbox" id="ja1" name="allein" value="Ich komme zum Event allein"/>
                    <CheckboxLabel for="allein">Ja, ich komme allein zum Event</CheckboxLabel><br/>
                    <AnmeldeCheckbox type="checkbox" id="ja2" name="begleitperson"
                                     value="Ich komme mit Begleitung zum Event" onClick={e => setMitBegleitung(e.target.checked)}/>
                    <CheckboxLabel for="begleitperson">Ja, ich komme mit einer Begleitperson</CheckboxLabel><br/>
                    <AnmeldeCheckbox type="checkbox" id="shuttleservice" name="shuttle"
                                     value="Ich benötige einen Shuttle Service"/>
                    <CheckboxLabel for="shuttle">Ich habe interesse am Shuttle Service</CheckboxLabel><br/>
                    <AnmeldeCheckbox type="checkbox" id="nein" name="vehicle1"
                                     value="Nein, ich kann leider nicht kommen!"/>
                    <CheckboxLabel for="ich komme">Nein, ich kann leider nicht kommen</CheckboxLabel><br/>

                    <AnmeldeInput type="text" value={e => (e.target.value)}
                                  placeholder="Vor- und Zuname"/>
                    {/*<Plusicon src={PlusIcon}/>*/}

                    <AnmeldeInputBegleitung visible={mitBegleitung} id="begleitpersonfeld" type="text" value={e => (e.target.value)}

                                  placeholder="Vor-und Zuname der zusätzlichen Begleitperson"/>
                    <AnmeldeBemerkung type="text" value={e => (e.target.value)}
                                      placeholder="Bemerkung"/>

                    <AnmeldeButton>Abschicken</AnmeldeButton>
                </Anmeldeform>
            </OuterLeft>
            <AnmeldungRight>
                <OverNightBox><OverNightTitle>Übernachtungsempfehlung</OverNightTitle>
                    <OverNightBody><strong>Hotel Bogenrieder in
                        Pörnbach</strong><br/>Ein Kontingent von 22 Zimmer sind bis XX für Sie reserviert.</OverNightBody>
                    <a href="tel:004984461304"><AnmeldeButton>08446 / 13 04</AnmeldeButton></a>
                </OverNightBox>
            </AnmeldungRight>
        </>
    )
}

export default Anmeldung