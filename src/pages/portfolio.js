import React from 'react'
import { GrGatsbyjs, GrWordpress } from 'react-icons/gr'
import styled from 'styled-components'
const StyledUl = styled.ul`
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: .5rem;
`
const StyledPortfolioLink = styled.a`
     text-decoration: none;
     color: inherit;
     article {
         padding: .5rem;
         border-radius: .5rem;
         background-color: white;
         img {
             border-radius: .5rem;
             display: block;
             height: 200px;
             width: 100%;
             object-fit: cover;
             object-position: center;
        }
        div {
            padding: .25rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            svg {
                font-size: 1.25rem;  
            }
            h3 {
             font-size: 1.5rem;
             font-weight: bold;
            }
        }
    }
`

const PortfolioLink = ({ url, title, img, year, icon }) => {
    return (
        <StyledPortfolioLink href={url} target="_blank">
            <article>
                <img src={img} alt={title} />
                <div>
                    {icon}
                    <h3>{title}</h3>
                    <p>{year}</p>
                </div>
            </article>
        </StyledPortfolioLink>
    )
}



const Portfolio = () => {
    return (
        <section style={{ paddingTop: '3rem' }}>
            <StyledUl>
                <li>
                    <PortfolioLink icon={<GrGatsbyjs />} url="https://kb-uicomponent.netlify.app/" title="uicomponent" img="https://raw.githubusercontent.com/rts-cmk-opgaver/praktikperiode-uicomponents/master/hero.jpg?token=AL43SQVSK4Q24STVUEHIPCS65HDOA" year="2020" />
                </li>
                <li>
                    <PortfolioLink icon={<GrGatsbyjs />} url="https://yscn.netlify.app/" title="yscn" img="https://scontent-cph2-1.xx.fbcdn.net/v/t1.0-9/61635763_2039231459719593_2924034015952371712_o.jpg?_nc_cat=104&_nc_sid=730e14&_nc_ohc=gx_mPjFkyBoAX_hmiF0&_nc_ht=scontent-cph2-1.xx&oh=c7abee3933a7f1109c31ebcb937c2fd1&oe=5EEE6E3B" year="2020" />
                </li>
                <li>
                    <PortfolioLink icon={<GrWordpress />} url="https://limeandlemon.dk/" title="limeandlemon" img="https://limeandlemon.dk/wp-content/uploads/2017/04/dreamstime_xl_71982843-1024x682.jpg" year="2016" />
                </li>
            </StyledUl>
        </section>
    )
}

export default Portfolio
