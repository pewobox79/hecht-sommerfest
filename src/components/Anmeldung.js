import React, {useState} from "react";
import styled from "styled-components";

const FormLabel = styled.label`font-size: 2rem; font-weight: bold;`
const Input = styled.input`width: 350px;
  height: 50px;
  margin: auto;
  height: 40px;
  border-radius: 5px;
  outline: none; `
const InputButton = styled.button`width: 80px;
  height: 50px;
  padding: 5px;
  border-radius: 10px;
  background-color: darkgrey;
color: white;
font-weight: bold`

function Anmeldung() {

    const [attendees, setAttendees] = useState()


    return (
        <form>
            <FormLabel>Anmeldung zum Hecht-Sommerfest</FormLabel><br/>
            <Input type="integer" placeholder="Vor- und Zuname" onChange={e => {
                setAttendees(e.target.value)
            }}/>
            <InputButton >+</InputButton>

            <br/>

            <Input type="text" placeholder="Vor- und Zuname der zusätzlichen Begleitperson" onChange={e => {
                setAttendees(e.target.value)
            }}/>
            <br/>
            <InputButton type="submit" value="Submit">Anmelden</InputButton>
            <InputButton>Nein</InputButton>
        </form>
    )
}

export default Anmeldung