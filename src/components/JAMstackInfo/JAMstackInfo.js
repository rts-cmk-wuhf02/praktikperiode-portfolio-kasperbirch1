import React from 'react'
import { breakpoints } from '../../theme/breakpoints'
import styled from 'styled-components'
const StyledJAMstackInfo = styled.section`
    min-height: calc(100vh - 3rem);
    display: grid;
    grid-gap: 1rem;
    h2 {
        color: green;
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

const JAMstackInfo = () => {
    return (
        <StyledJAMstackInfo>
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
        </StyledJAMstackInfo>
    )
}

export default JAMstackInfo
