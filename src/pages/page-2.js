import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => {
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
      setCurrentHeight(window.innerHeight / 100 + 'px')
    })

  }, []);
  return (
    <>
      <SEO title="Page two" />
      <section style={{ height: 'calc((100 * var(--vh)) - 6rem)' }}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
        <h2 style={{ fontSize: '3rem', color: 'red', textAlign: 'center' }}>{`InnerHeight: ${currentHeight}`}</h2>
      </section>
    </>
  )
}

export default SecondPage

