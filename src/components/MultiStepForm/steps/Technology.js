import React from 'react'
import { GrGatsbyjs, GrWordpress, GrReactjs } from 'react-icons/gr'
import { StyledButtonsContainer, TESTFORMCONTAINER } from "../StyledMultiStepForm";
import styled from 'styled-components'
const ExtraFormStyle = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
   
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
        <>
            <TESTFORMCONTAINER>
                <ExtraFormStyle>
                    <label htmlFor="Gatsby">
                        <input name="technology" id="Gatsby" type="radio" value={"Gatsby"} onClick={setForm} />
                        <GrGatsbyjs />
                    </label>
                    <label htmlFor="React">
                        <input name="technology" id="React" type="radio" value={"React"} onClick={setForm} />
                        <GrReactjs />
                    </label>
                    <label htmlFor="Wordpress">
                        <input name="technology" id="Wordpress" type="radio" value={"Wordpress"} onClick={setForm} />
                        <GrWordpress />
                    </label>
                </ExtraFormStyle>
            </TESTFORMCONTAINER>
            <StyledButtonsContainer>
                <button style={{ gridColumn: '1/-1' }} onClick={next}>Next</button>
            </StyledButtonsContainer>
        </>
    )
}

export default Technology
