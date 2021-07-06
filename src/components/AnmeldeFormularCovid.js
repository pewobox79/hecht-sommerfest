import React from "react";
import {
    AnmeldeLabel,
    AnmeldeTitel,
    CheckboxLabel,
    AnmeldeBemerkung,
    TimeStyle,
    AnmeldeCheckbox,
    AnmeldeInput,
    Anmeldeform,
    AnmeldeButton,
    CovidDatum, CovidSelect
} from "../styled";

function AnmeldeFormularCovid() {

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
        let anmeldung = {
            antwort: document.getElementById("antwort").value,
            name: document.getElementById("name").value,
            covid: {
                status: document.getElementById("covid").value,
                covidDatum: document.getElementById("covidDatum").value
            },
            shuttle: {
                wahl: document.getElementById("shuttle").value,
                wunschort: document.getElementById("wunschort").value
            },
            bemerkung: document.getElementById("bemerkung").value

        }
        console.log(anmeldung)
        if (anmeldung)
            Email.send({
                SecureToken: "bc61b703-5e46-49b7-ad19-be1847cf6673",
                To: 'y.wolf@hecht.eu',
                From: "pewobox79@gmail.com",
                Subject: `Sommerfest Rückmeldung`,
                Body: `Neu Anmeldung von <strong>${anmeldung.name}</strong>. ${anmeldung.antwort}, CovidStatus: ${anmeldung.covid.status} Datum: ${anmeldung.covid.covidDatum}, Shuttle: ${anmeldung.shuttle.wahl}  Wusnchort: ${anmeldung.shuttle.wunschort}`
            }).then(
                message => alert("Ihre Rückmeldung zum Sommerfest wurde an Yessica Wolf verschickt.")
            );

    }

    return (
        <>
            <AnmeldeTitel>Wir bitten um Rückmeldung bis zum <TimeStyle>14.07.2021</TimeStyle></AnmeldeTitel>

            <Anmeldeform onSubmit={sendMail} method="post" enctype="text/plain">
                <AnmeldeLabel>Anmeldung</AnmeldeLabel>
                <AnmeldeInput id="name" name="name" type="text" placeholder="Vorname, Name"/><br/>
                <AnmeldeCheckbox type="checkbox" id="antwort" name="ja" value="Ja, ich komme zum Sommerfest"/>
                <CheckboxLabel htmlFor="ja">Ja, ich komme zum Sommerfest</CheckboxLabel><br/>
                <CheckboxLabel htmlFor="covid">
                    Ich bin
                    <CovidSelect id="covid" name="covid">
                        <option>Wählen</option>
                        <option value="genesen">Genesen</option>
                        <option value="geimpft">Geimpft (2.Impfung)</option>
                    </CovidSelect>
                    <CovidDatum type="text" id="covidDatum" placeholder="Datum"/>
                </CheckboxLabel><br/>
                <AnmeldeCheckbox type="checkbox" id="shuttle" name="shuttle"
                                 value="Ich habe interesse am Shuttle Service"/>
                <CheckboxLabel htmlFor="shuttle">Ich habe interesse am Shuttle Service nach </CheckboxLabel>
                <AnmeldeInput type="text" id="wunschort" placeholder="Wunschort"/><br/>
                <AnmeldeCheckbox type="checkbox" id="antwort" name="Ich kann leider nicht kommen"/>
                <CheckboxLabel htmlFor="nein">Ich kann nicht kommen</CheckboxLabel><br/>
                <AnmeldeBemerkung type="textfield"
                                  placeholder="Hast du irgendeine Alergie oder sonstiges was wir für Dich beachten müssen?"
                                  id="bemerkung"/><br/>
                <AnmeldeButton type="submit">Anmeldung</AnmeldeButton>
            </Anmeldeform>
        </>
    )
}

export default AnmeldeFormularCovid