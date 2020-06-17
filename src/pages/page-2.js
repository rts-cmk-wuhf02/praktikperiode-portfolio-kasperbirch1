import React, { useEffect } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => {
  useEffect(() => {
    window.addEventListener('orientationchange', () => {
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    })

  }, []);
  return (
    <>
      <SEO title="Page two" />
      <section style={{ height: 'calc(var(--vh) - 6rem)' }}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </>
  )
}

export default SecondPage

