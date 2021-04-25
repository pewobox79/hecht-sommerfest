import React from "react";
import Anmeldung from "./Anmeldung";

import styled from "styled-components";

const FeedbackSection = styled.section`
  width: 100%; 
  height: 100vh; 
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  background-color: red`
function Feedback(){
    return(
        <FeedbackSection id="Anmeldung">
        <Anmeldung/>
        </FeedbackSection>
    )
}

export default Feedback