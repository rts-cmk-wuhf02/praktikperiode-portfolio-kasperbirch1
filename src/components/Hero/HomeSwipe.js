import React from 'react'
import { TiArrowForwardOutline } from 'react-icons/ti'
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
const StyledHomeSwipe = styled.article`
    padding: 1rem;
    display: grid;
    grid-gap: 1rem;
    h2, h4 {
        font-weight: bold;
        font-size: 2rem;
    }
    article {
            border-radius: .5rem;
            padding: .5rem;
            background-color: rgba(255,255,255, .75);
        h3 {
            margin-bottom: 1rem;
            font-weight: bold;
            font-size: 1.5rem;
            }
    }
    div {
        svg {
            color: rgba(255,255,255, .75);
            font-size: 3rem;
            transform: rotateX(180deg);
        }
    }
    
    @media ${breakpoints.sm} {
        padding: 2rem;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        h2 {
            grid-column: 1/-1;
        }
        div {
            grid-column: 1/-1;
        }
  }
`

const HomeSwipe = () => {
    return (
        <StyledHomeSwipe>
            <h2>JAMstack</h2>
            <article>
                <h3>Better Performance</h3>
                <p>Why wait for pages to build on the fly when you can generate them at deploy time? When it comes to minimizing the time to first byte, nothing beats pre-built files served over a CDN.</p>
            </article>
            <article>
                <h3>Higher Security</h3>
                <p>With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced. You can also leverage the domain expertise of specialist third-party services.</p>
            </article>
            <article>
                <h3>Cheaper, Easier Scaling</h3>
                <p>When your deployment amounts to a stack of files that can be served anywhere, scaling is a matter of serving those files in more places. CDNs are perfect for this, and often include scaling in all of their plans.</p>
            </article>
            <div>
                <h4>Swipe for skils</h4>
                <TiArrowForwardOutline />
            </div>
        </StyledHomeSwipe>
    )
}

export default HomeSwipe
