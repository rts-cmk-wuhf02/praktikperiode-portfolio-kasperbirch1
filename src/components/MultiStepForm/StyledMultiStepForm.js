import styled from "styled-components"

export const StyledMultiStepFormContainer = styled.section`
    height: calc(100vh - 3rem);
    padding:3rem 1rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label {
        text-transform: capitalize;
        font-weight: bold;
        margin: .5rem 0;
    }
    input {
        color: white;
        border: 1px solid white;
        border-radius: .5rem;
        background-color: rgba(0,0,0,0.3);
        padding: .5rem;
        font-size: 1.25rem;
    }
`

export const StyledButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

export const TESTFORMCONTAINER = styled.form`
    /* outline: 1px dotted red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
`
