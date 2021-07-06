import React, {useState} from "react";
import {
    AnmeldeBemerkung, AnmeldeButton,
    AnmeldeCheckbox, Anmeldeform,
    AnmeldeInput,
    AnmeldeInputBegleitung,
    AnmeldeLabel,
    AnmeldeTitel,
    CheckboxLabel,
    TimeStyle,
} from "../styled";

function Anmeldeformular() {

    const [meldungAllein, setMeldungAllein] = useState("werde mit")
    const [meldungBegleitung, setMeldungBegleitung] = useState("ohne Begleitung kommen")
    const [absage, setAbsage] = useState("kann kommen")
    const [teilnehmerName, setTeilnehmerName] = useState()
    const [begleitungName, setBegleitungName] = useState("")
    const [shuttle, setShuttle] = useState(" Ich benötige keinen Shuttleservice")
    const [bemerkung, setBemerkung] = useState()

    const [mitBegleitung, setMitBegleitung] = useState(false)

    /* SmtpJS.com - v3.0.0 */
    const Email = {
        send: function (a) {
            return new Promise(function (n, e) {
                // eslint-disable-next-line no-unused-expressions,no-sequences
                a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
                let t = JSON.stringify(a);
                Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
                    n(e)
                })
            })
        }, ajaxPost: function (e, n, t) {
            let a = Email.createCORSRequest("POST", e);
            // eslint-disable-next-line no-unused-expressions
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () {
                let e = a.responseText;
                null != t && t(e)
            }, a.send(n)
        }, ajax: function (e, n) {
            let t = Email.createCORSRequest("GET", e);
            // eslint-disable-next-line no-unused-expressions
            t.onload = function () {
                let e = t.responseText;
                null != n && n(e)
            }, t.send()
        }, createCORSRequest: function (e, n) {
            let t = new XMLHttpRequest;
            // eslint-disable-next-line no-undef
            return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
        }
    };

    function sendMail(e) {
        e.preventDefault()
        Email.send({
            SecureToken: "bc61b703-5e46-49b7-ad19-be1847cf6673",
            To: 'y.wolf@hecht.eu',
            Cc: 'julien.lobo.13@gmail.com',
            From: "pewobox79@gmail.com",
            Subject: `Sommerfest Rückmeldung`,
            Body: `Hallo - ich ${teilnehmerName} ${meldungAllein}. ${shuttle}. Sonstige Info: ${bemerkung}`
        }).then(
            message => alert("Ihre Rückmeldung zum Sommerfest wurde an Yessica Wolf verschickt.")
        );
    }

    return (
        <>

            <AnmeldeTitel>Wir bitten um Rückmeldung bis zum <TimeStyle>14.07.2021</TimeStyle></AnmeldeTitel>
            <Anmeldeform onSubmit={sendMail} method="post" enctype="text/plain">
                <AnmeldeLabel>Anmeldung</AnmeldeLabel>

                <AnmeldeCheckbox type="checkbox" id="ja1" name="allein" value={meldungAllein}
                                 onChange={e => setMeldungAllein(e = ("komme zum Sommerfest"))}/>
                <CheckboxLabel htmlFor="allein">Ja, ich komme zum Sommerfest</CheckboxLabel><br/>
                <AnmeldeCheckbox id="genesen" type="checkbox" id="ja2" name="begleitperson"
                                 value={meldungBegleitung}
                                 onChange={e => setMeldungBegleitung(e = ("mit begleitung kommen"))}
                                 onClick={e => setMitBegleitung(e.target.checked)}/>
                <CheckboxLabel htmlFor="begleitperson">Ja, ich komme mit einer Begleitperson</CheckboxLabel><br/>
                <AnmeldeCheckbox type="checkbox" id="shuttleservice" name="shuttle"
                                 value={shuttle} onChange={e => setShuttle(e = " Ich benötige einen Shuttle Service")}/>
                <CheckboxLabel htmlFor="shuttle">Ich habe interesse am Shuttle Service</CheckboxLabel><br/>
                <AnmeldeCheckbox type="checkbox" id="nein" name={absage}
                                 value={absage} onChange={e => setAbsage(e = "Nein, ich kann leider nicht kommen!")}/>
                <CheckboxLabel htmlFor="ich komme">Nein, ich kann leider nicht kommen</CheckboxLabel><br/>

                <AnmeldeInput type="text" value={teilnehmerName} onChange={e => (setTeilnehmerName(e.target.value))}
                              placeholder="Vor- und Zuname" required/>
                {/*<Plusicon src={PlusIcon}/>*/}
                <AnmeldeInputBegleitung visible={mitBegleitung} id="begleitpersonfeld" type="text"
                                        value={begleitungName} onChange={e => (setBegleitungName(e.target.value))}
                                        placeholder="Vor-und Zuname der zusätzlichen Begleitperson"/>
                <AnmeldeBemerkung type="text" value={bemerkung} onChange={e => (setBemerkung(e.target.value))}
                                  placeholder="Bemerkung"/>

                <AnmeldeButton>Abschicken</AnmeldeButton>
            </Anmeldeform>

        </>
    )
}

export default Anmeldeformular