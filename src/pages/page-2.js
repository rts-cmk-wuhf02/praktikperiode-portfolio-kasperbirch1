import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => {
  const [currentHeight, setCurrentHeight] = useState(0);
  useEffect(() => {
    let NewHeight = window.innerHeight
    setCurrentHeight(NewHeight)
  }, []);

  return (
    <>
      <SEO title="Page two" />
      <section style={{ minHeight: `calc(${currentHeight}px - 6rem)` }}>
        <h1>Hi from the second page</h1>
        {currentHeight}
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </section>
    </>
  )
}

export default SecondPage
