import React from "react";
import {Date, Time} from "../styled";
import styled from "styled-components";

const DateField = styled.div`
  width: 50%; 
  box-sizing: border-box;
  float: right;
`
function CounterField (){
    return(
        <DateField>
            <Date>23<br/>07<br/>21</Date>
            <Time>18:30 Uhr</Time>
        </DateField>
    )
}

export default CounterField