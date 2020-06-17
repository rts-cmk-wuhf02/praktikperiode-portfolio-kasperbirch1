import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'
const StyledSection = styled.section`
    height: -webkit-fill-available;
    min-height: -webkit-fill-available;
    h1 {
      color: red;
    }
`

const SecondPage = () => {
  return (
    <>
      <SEO title="Page two" />
      <section style={{ height: 'calc(100vh - 6rem)' }}>
        <StyledSection>
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/">Go back to the homepage</Link>
          {/* <h2 style={{ fontSize: '3rem', color: 'red', textAlign: 'center' }}>{`InnerHeight: ${currentHeight}`}</h2> */}
        </StyledSection>
      </section>
    </>
  )
}

export default SecondPage

