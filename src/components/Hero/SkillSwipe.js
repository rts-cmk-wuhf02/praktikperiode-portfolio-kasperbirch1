import React from 'react'
import styled from 'styled-components'
const StyledSkillSwipe = styled.article`
    svg {
        font-size: 5rem;
    }
    h2 {
        font-size: 2rem;
    }
`

const SkillSwipe = ({ icon, title }) => {
    return (
        <StyledSkillSwipe>
            {icon}
            <h2>{title}</h2>
        </StyledSkillSwipe>
    )
}

export default SkillSwipe
