import React from "react";
import {AnmeldeButton, OverNightBody, OverNightBox, OverNightTitle, SpanStyle} from "../styled";

function Uebernachtung(){
    return(
        <OverNightBox><OverNightTitle>Übernachtungsempfehlung</OverNightTitle>
            <OverNightBody><strong>Hotel Bogenrieder in
                Pörnbach</strong></OverNightBody>
            <a href="tel:004984461304"><AnmeldeButton>08446 / 13 04</AnmeldeButton></a>
        </OverNightBox>
    )

}

export default Uebernachtung