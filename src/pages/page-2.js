import React, { useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import styled from 'styled-components'
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
const SecondPage = () => {
  const [ShowModal, setShowModal] = useState(false);

  return (
    <>
      <SEO title="Page two" />
      <section style={{ height: 'calc(var(--vh) - 6rem)' }}>
        <h1>Hi from the second page</h1>
        <Link to="/">Go back to the homepage</Link>
        <p>Welcome to page 2</p>
        <button onClick={() => setShowModal(!ShowModal)}>Open modal</button>
      </section>
      {
        ShowModal ?
          <StyledModal>
            <h3>Hej Modal</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed illo consequatur, beatae accusantium magnam dignissimos, quam ad inventore asperiores illum nemo voluptatibus mollitia alias a nostrum ipsum laboriosam quae dolore.</p>
            <button onClick={() => setShowModal(!ShowModal)}>Close modal</button>
          </StyledModal>
          :
          null
      }
    </>
  )
}

export default SecondPage

