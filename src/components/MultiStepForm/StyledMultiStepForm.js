import styled from "styled-components"
import { breakpoints } from '../../theme/breakpoints'

export const StyledMultiStepFormWrapper = styled.section`
    height: calc(100vh - 6rem);
    padding:0 1rem 1rem;
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
    @media ${breakpoints.sm} {
        width: 40%;
        margin: 0 auto;
    }
`

export const StyledButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

export const StyledMultiStepForm = styled.form`
    /* outline: 1px dotted red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;

    h3 {
        text-transform: capitalize;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 1rem;
    }
    h4 {
        text-transform: capitalize;
        font-size: 1.25rem;
        font-weight: bold; 
        margin-top: .75rem;
    }
`
