import React from 'react'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
const StyledHomeSwipe = styled.article`
    padding: 1rem;
    h2, h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    div {
        svg {
            color: rgba(255,255,255, .75);
            font-size: 3rem;
            transform: rotateX(180deg);
        }
    }
`

const HomeSwipe = () => {
    return (
        <StyledHomeSwipe>
            <h2>Kasper Birch</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sint iste, quas vel ratione et error explicabo totam provident! Repellendus eveniet earum praesentium tempora nesciunt voluptatum porro, fugit numquam ex!</p>
            <div>
                <h4>Swipe for skils</h4>
                <TiArrowForwardOutline />
            </div>
        </StyledHomeSwipe>
    )
}

export default HomeSwipe
