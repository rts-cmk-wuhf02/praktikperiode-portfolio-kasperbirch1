import React from 'react'
import { GrGatsbyjs, GrWordpress } from 'react-icons/gr'
import { StyledForm } from "./StyledForm";
import styled from 'styled-components'
const ExtraFormStyle = styled.div`
    display: flex;
    justify-content: space-around;
   
    svg {
        cursor: pointer;
        font-size: 3rem;
    }
    [type=radio] {
        display: none;
        :checked ~ svg {
            color: green;
        }
    }
`


const Technology = ({ setForm, navigation }) => {
    const { next } = navigation;

    return (
        <StyledForm>
            <h2>Vælg teknologi</h2>
            <ExtraFormStyle>
                <label>
                    <input name="technology" id="Gatsby" type="radio" value={"Gatsby"} onClick={setForm} />
                    <GrGatsbyjs />
                </label>
                <label>
                    <input name="technology" id="Wordpress" type="radio" value={"Wordpress"} onClick={setForm} />
                    <GrWordpress />
                </label>
            </ExtraFormStyle>
            <button onClick={next}>Next</button>
        </StyledForm>
    )
}

export default Technology
