import React from 'react'
import { GrGatsbyjs, GrWordpress, GrReactjs } from 'react-icons/gr'
import { StyledForm, StyledButtonsContainer } from "./StyledForm";
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
                    <input name="technology" id="React " type="radio" value={"React "} onClick={setForm} />
                    <GrReactjs />
                </label>
                <label>
                    <input name="technology" id="Wordpress" type="radio" value={"Wordpress"} onClick={setForm} />
                    <GrWordpress />
                </label>
            </ExtraFormStyle>
            <StyledButtonsContainer>
                <button style={{ gridColumn: '1/-1' }} onClick={next}>Next</button>
            </StyledButtonsContainer>
        </StyledForm>
    )
}

export default Technology
