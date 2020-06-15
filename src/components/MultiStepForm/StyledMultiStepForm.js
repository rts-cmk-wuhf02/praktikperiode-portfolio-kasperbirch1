import styled from "styled-components"

export const StyledMultiStepFormContainer = styled.section`
    height: calc(100vh - 3rem);
    padding: 3rem;
    display: grid;
    align-items: center;
    h3 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
`

export const StyledButtonsContainer = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

export const TESTFORMCONTAINER = styled.form`
    outline: 1px dotted red;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
