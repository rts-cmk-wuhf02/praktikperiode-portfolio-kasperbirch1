import styled from "styled-components"

export const StyledForm = styled.form`
    height: calc(100vh - 3rem);
    padding: 3rem;
    
    h2 {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 2rem;
    }
`

export const StyledButtonsContainer = styled.div`
    margin-top: 1.5rem;
    display: grid;
    grid-template-columns: repeat(2,1fr)
`