import React from 'react'
import styled from 'styled-components'
const StyledSwipeIcon = styled.article`
    svg {
        font-size: 6rem;
        color: ${props => props.color};
    }
    h2 {
        margin-top: -.70rem;
        text-align: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.color};
    }
`

const SkillSwipe = ({ icon, title, color }) => {
    return (
        <StyledSwipeIcon color={color}>
            {icon}
            <h2>{title}</h2>
        </StyledSwipeIcon>
    )
}

export default SkillSwipe
