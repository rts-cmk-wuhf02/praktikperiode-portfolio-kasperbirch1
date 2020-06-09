import React from 'react'
import { TiArrowForwardOutline, TiArrowRightOutline } from 'react-icons/ti'
import styled from 'styled-components'
const StyledHomeSwipe = styled.article`
padding: 2rem;
h2 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 2rem;
}
svg {
    margin-top: 3rem;
    transform: rotateX(180deg);
    font-size: 3rem;
}
`

const HomeSwipe = () => {
    return (
        <StyledHomeSwipe>
            <h2>Kasper Birch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima non perspiciatis sequi, amet facere quisquam quos deserunt ducimus, voluptates magni! Nesciunt unde atque totam quasi quas nisi adipisci rem?</p>
            <TiArrowForwardOutline />
        </StyledHomeSwipe>
    )
}

export default HomeSwipe
