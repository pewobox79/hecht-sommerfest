import React from "react";
import {Date, Time} from "../styled";
import styled from "styled-components";
import DateField from "./DateField";
import TimeField from "./TimeField";

const CounterFieldStyle = styled.div`
display: flex;
  justify-content: center;
  background-color: green;
  `


function CounterField() {
    return (
        <CounterFieldStyle>
            <DateField/>
            <TimeField/>
        </CounterFieldStyle>
    )
}

export default CounterField