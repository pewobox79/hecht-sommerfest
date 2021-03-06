import React, {useState} from "react";
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
    CovidDatum, CovidSelect, AnmeldeName
} from "../styled";

function AnmeldeFormularCovid() {

    //toggle features
    function zusage() {
        if (document.getElementById('ja').checked) {
            document.getElementById('covid').style.display = 'block';
            document.getElementById('covid').style.float = 'left';
            document.getElementById('covidDatum').style.display = 'block';
            document.getElementById('ja').value = "ja, ich komme zum Sommerfest";
            document.getElementById('covid').required = true
        } else {
            document.getElementById('covid').style.display = 'none';
            document.getElementById('covidDatum').style.display = 'none';
            document.getElementById('ja').value = "empty"
        }

    }

    function absage() {
        if (document.getElementById('nein').checked) {
            document.getElementById('nein').value = "Nein, ich komme nicht zum Sommerfest"
        } else {
            document.getElementById('nein').value = 'empty'
        }
    }

    function shuttleFeedback() {
        if (document.getElementById('shuttle').checked) {
            document.getElementById('wunschort').style.display = 'block';
            document.getElementById('shuttle').value = "Ich habe Interesse am Shuttle Sevice"
        } else {
            document.getElementById('wunschort').style.display = 'none';
            document.getElementById('shuttle').value = "Kein interesse am Shuttle"
        }

    }

//email handling
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
            antwort: {
                ja: document.getElementById("ja").value,
                nein: document.getElementById("nein").value,
            },
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
                Cc: ['julien.lobo.13@gmail.com', 'yessica.wolf@gmx.de'],
                From: "pewobox79@gmail.com",
                Subject: `Sommerfest R??ckmeldung`,
                Body: `Neu Anmeldung von <strong>${anmeldung.name}</strong>. Teilnahme R??ckmeldung: ${anmeldung.antwort.ja} ${anmeldung.antwort.nein}, CovidStatus: ${anmeldung.covid.status} Datum: ${anmeldung.covid.covidDatum}, Shuttle: ${anmeldung.shuttle.wahl}  Wusnchort: ${anmeldung.shuttle.wunschort}`
            }).then(
                message => alert("Deine R??ckmeldung zum Sommerfest wurde an Yessica Wolf verschickt.")
            ).catch(error => alert(error.message));
    }

    return (
        <>
            <AnmeldeTitel>Wir bitten um R??ckmeldung bis zum <TimeStyle>14.07.2021</TimeStyle></AnmeldeTitel>

            <Anmeldeform onSubmit={sendMail} method="post" enctype="text/plain">
                <AnmeldeLabel>Anmeldung</AnmeldeLabel>
                <AnmeldeName id="name" name="name" type="text" placeholder="Vorname, Name" required/><br/>
                <AnmeldeCheckbox onChange={zusage} type="checkbox" id="ja" name="ja"/>
                <CheckboxLabel htmlFor="ja">Ja, ich komme zum Sommerfest</CheckboxLabel><br/>
                <CovidSelect id="covid" name="covid">
                    <option>Bitte w??hlen...</option>
                    <option value="genesen">Ich bin genesen</option>
                    <option value="geimpft">Ich bin geimpft (2.Impfung)</option>
                    <option value="testen">Ich gehe zum testen</option>
                </CovidSelect>
                <CovidDatum type="text" id="covidDatum" placeholder="Datum"/>
                <br/>
                <AnmeldeCheckbox onChange={shuttleFeedback} type="checkbox" id="shuttle" name="shuttle"/>
                <CheckboxLabel htmlFor="shuttle">Ich habe Interesse am Shuttle nach </CheckboxLabel>
                <AnmeldeInput type="text" id="wunschort" placeholder="Wunschort"/><br/>

                <AnmeldeBemerkung type="textfield"
                                  placeholder="Hinweise f??r das Orgateam (z.B. Allergien, Lebensmittelunvertr??glichkeiten, Veganer, etc.)?"
                                  id="bemerkung"/><br/>
                <AnmeldeCheckbox onChange={absage} type="checkbox" id="nein" name="Ich kann leider nicht kommen"/>
                <CheckboxLabel htmlFor="nein">Nein, ich kann nicht kommen</CheckboxLabel><br/>
                <AnmeldeButton type="submit">Anmelden</AnmeldeButton>
            </Anmeldeform>
        </>
    )
}

export default AnmeldeFormularCovid