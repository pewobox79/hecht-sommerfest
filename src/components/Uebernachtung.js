import React from "react";
import {AnmeldeButton, OverNightBody, OverNightBox, OverNightTitle} from "../styled";

function Uebernachtung(){
    return(
        <OverNightBox><OverNightTitle>Übernachtungsempfehlung</OverNightTitle>
            <OverNightBody><strong>Hotel Bogenrieder in
                Pörnbach</strong><br/>Ein Kontingent von 22 Zimmer ist bis zum <strong>11.7.2021</strong> für Sie reserviert.</OverNightBody>
            <a href="tel:004984461304"><AnmeldeButton>08446 / 13 04</AnmeldeButton></a>
        </OverNightBox>
    )

}

export default Uebernachtung