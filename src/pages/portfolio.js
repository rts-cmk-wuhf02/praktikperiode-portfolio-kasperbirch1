import React, { useState } from 'react'
import { GrGatsbyjs, GrWordpress } from 'react-icons/gr'
import styled from 'styled-components'
import { portfolie } from '../content/portfolieLinks'

const StyledPortfolio = styled.section`
    min-height: calc(var(--vh) - 6rem);
    ul {
        padding:0 1rem 1rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: .5rem;
    }
`

const StyledPortfolioArticle = styled.article`
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
        font-size: 1.25rem;
        font-weight: bold;
    }
}
`

const PortfolioLink = ({ url, title, img, year, icon, description }) => {
    const [ShowModal, setShowModal] = useState(false);

    return (
        <>
            <StyledPortfolioArticle onClick={() => setShowModal(!ShowModal)}>
                <img src={img} alt={title} />
                <div>
                    {icon}
                    <h3>{title}</h3>
                    <p>{year}</p>
                </div>
            </StyledPortfolioArticle>
            {
                ShowModal ?
                    <StyledModal>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={url} target="_blank">Link to site</a>
                        <button onClick={() => setShowModal(!ShowModal)}>Close modal</button>
                    </StyledModal>
                    :
                    null
            }
        </>
    )
}

const Portfolio = () => {
    console.log("portfolie", portfolie);

    return (
        <StyledPortfolio>
            <ul>
                {
                    portfolie.map((item, index) => {
                        return (
                            <li key={index}>
                                <PortfolioLink icon={item.icon} url={item.url} title={item.title} img={item.url} year={item.year} description={item.description} />
                            </li>
                        )
                    })
                }
            </ul>
        </StyledPortfolio>
    )
}

export default Portfolio



const StyledModal = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 4;
  background-color: rgba(0,0,0,.5);
  display: grid;
  place-content: center;
  padding: 3rem;
  color: white;
  h3 {
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  }
  button {
    margin: 1rem 0;
  }
`