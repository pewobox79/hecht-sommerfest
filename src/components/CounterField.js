import React from "react";
import DateField from "./DateField";
import TimeField from "./TimeField";
import {CounterFieldStyle} from "../styled";


function CounterField() {
    return (
        <CounterFieldStyle>
            <DateField/>
            <TimeField/>
        </CounterFieldStyle>
    )
}

export default CounterField