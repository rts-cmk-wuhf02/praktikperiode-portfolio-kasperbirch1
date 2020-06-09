import React from 'react'
import { TiArrowForwardOutline } from 'react-icons/ti'
import styled from 'styled-components'
const StyledHomeSwipe = styled.article`
padding: 2rem;
h2 {
    font-weight: bold;
    font-size: 2rem;
}
h3 {
    margin-top: 3rem;
    font-weight: bold;
    font-size: 1.5rem;
}
svg {
    font-size: 3rem;
    transform: rotateX(180deg);
}
`

const HomeSwipe = () => {
    return (
        <StyledHomeSwipe>
            <h2>Kasper Birch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum minima non perspiciatis sequi, amet facere quisquam quos deserunt ducimus, voluptates magni! Nesciunt unde atque totam quasi quas nisi adipisci rem?</p>
            <div>
                <h3>Swipe for skils</h3>
                <TiArrowForwardOutline />
            </div>
        </StyledHomeSwipe>
    )
}

export default HomeSwipe
