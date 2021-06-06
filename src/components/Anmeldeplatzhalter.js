import React, {useState} from "react";
import {
    AnmeldeBemerkung, AnmeldeButton,
    AnmeldeCheckbox, Anmeldeform,
    AnmeldeInput,
    AnmeldeInputBegleitung,
    AnmeldeLabel,
    AnmeldeTitel,
    CheckboxLabel, OuterLeft,
    TimeStyle,
} from "../styled";

function Anmeldeplatzhalter() {

    const [meldungAllein, setMeldungAllein] = useState()
    const [meldungBegleitung, setMeldungBegleitung] = useState()
    const [absage, setAbsage] = useState()
    const [teilnehmerName, setTeilnehmerName] = useState()
    const [begleitungName, setBegleitungName] = useState()
    const [shuttle, setShuttle] = useState()
    const [bemerkung, setBemerkung] = useState()


    const [mitBegleitung, setMitBegleitung] = useState(false)

    function handleAnmeldung(e) {
        e.preventDefault()
        alert(absage + meldungAllein + "Name" + teilnehmerName + " " + "Begleitung: " + begleitungName + shuttle + " " + "Bemerkung" + bemerkung)

    }


    return (
        <>

            <AnmeldeTitel>Registrierung zum Sommerfest bald möglich!</AnmeldeTitel>
            <AnmeldeLabel>Sobald wir nähere Informationen zu aktuellen Corona-Bestimmungen erhalten, werden wir die Anmeldung zum Sommerfest freischalten!</AnmeldeLabel>
        </>
    )
}

export default Anmeldeplatzhalter