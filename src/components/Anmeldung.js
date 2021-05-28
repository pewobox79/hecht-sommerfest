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
    OverNightBody, AnmeldeInput, AnmeldeInputBegleitung, AnmeldeCheckbox, AnmeldeBemerkung, CheckboxLabel
} from "../styled";


function Anmeldung() {

    const [meldungAllein, setMeldungAllein]= useState()
    const [meldungBegleitung, setMeldungBegleitung]= useState()
    const [absage, setAbsage] = useState()
    const [teilnehmerName, setTeilnehmerName] = useState()
    const [begleitungName, setBegleitungName] = useState()
    const [shuttle, setShuttle] = useState()
    const [bemerkung, setBemerkung] = useState()


    const [mitBegleitung, setMitBegleitung] = useState(false)

function handleAnmeldung(e){
        e.preventDefault()
    alert(absage + meldungAllein + "Name" + teilnehmerName + " " + "Begleitung: " + begleitungName + shuttle + " " + "Bemerkung" +bemerkung)

    }


    return (
        <>

            <OuterLeft>
                <AnmeldeTitel>Wir bitten um Rückmeldung bis zum <TimeStyle>04.07.2021</TimeStyle></AnmeldeTitel>
                <Anmeldeform  enctype="text/plain">
                    <AnmeldeLabel>Anmeldung</AnmeldeLabel>

                    <AnmeldeCheckbox type="checkbox" id="ja1" name="allein" value={meldungAllein} onChange={e => setMeldungAllein(e = ("ich komme allein"))}/>
                    <CheckboxLabel for="allein">Ja, ich komme allein zum Event</CheckboxLabel><br/>
                    <AnmeldeCheckbox type="checkbox" id="ja2" name="begleitperson"
                                     value={meldungBegleitung} onChange={e => setMeldungBegleitung(e = ("ich komme mit begleitung"))} onClick={e => setMitBegleitung(e.target.checked)}/>
                    <CheckboxLabel for="begleitperson">Ja, ich komme mit einer Begleitperson</CheckboxLabel><br/>
                    <AnmeldeCheckbox type="checkbox" id="shuttleservice" name="shuttle"
                                     value={shuttle} onChange={e => setShuttle(e="Ich benötige einen Shuttle Service")}/>
                    <CheckboxLabel for="shuttle">Ich habe interesse am Shuttle Service</CheckboxLabel><br/>
                    <AnmeldeCheckbox type="checkbox" id="nein" name={absage}
                                     value={absage} onChange={e=> setAbsage(e= "Nein, ich kann leider nicht kommen!")}/>
                    <CheckboxLabel for="ich komme">Nein, ich kann leider nicht kommen</CheckboxLabel><br/>

                    <AnmeldeInput type="text" value={teilnehmerName} onChange={e => (setTeilnehmerName(e.target.value))}
                                  placeholder="Vor- und Zuname" required/>
                    {/*<Plusicon src={PlusIcon}/>*/}

                    <AnmeldeInputBegleitung visible={mitBegleitung} id="begleitpersonfeld" type="text" value={begleitungName} onChange={e => (setBegleitungName(e.target.value))}
                                  placeholder="Vor-und Zuname der zusätzlichen Begleitperson"/>
                    <AnmeldeBemerkung type="text" value={bemerkung} onChange={e => (setBemerkung(e.target.value))}
                                      placeholder="Bemerkung"/>

                    <AnmeldeButton onClick={handleAnmeldung}>Abschicken</AnmeldeButton>
                </Anmeldeform>
            </OuterLeft>
            <AnmeldungRight>
                <OverNightBox><OverNightTitle>Übernachtungsempfehlung</OverNightTitle>
                    <OverNightBody><strong>Hotel Bogenrieder in
                        Pörnbach</strong><br/>Ein Kontingent von 22 Zimmer ist bis zum <strong>11.7.2021</strong> für Sie reserviert.</OverNightBody>
                    <a href="tel:004984461304"><AnmeldeButton>08446 / 13 04</AnmeldeButton></a>
                </OverNightBox>
            </AnmeldungRight>
        </>
    )
}

export default Anmeldung