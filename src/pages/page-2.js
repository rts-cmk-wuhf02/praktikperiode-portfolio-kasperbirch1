import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'
const StyledSection = styled.section`
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
`

const SecondPage = () => {
  return (
    <>
      <SEO title="Page two" />
      <StyledSection>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
        <h2 style={{ fontSize: '3rem', color: 'red', textAlign: 'center' }}>{`InnerHeight: ${currentHeight}`}</h2>
      </StyledSection>
    </>
  )
}

export default SecondPage


/*
const [currentHeight, setCurrentHeight] = useState(0);
  useEffect(() => {
    let NewHeight = window.innerHeight
    window.addEventListener("orientationchange", function () {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        setCurrentHeight(NewHeight)
      }
    }, false);

  }, [NewHeight]);


      <section style={{ minHeight: `calc(${currentHeight}px - 6rem)` }}>

      </section>



*/