import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const SecondPage = () => {
  const [currentHeight, setCurrentHeight] = useState(0);
  useEffect(() => {
    let NewHeight = window.innerHeight
    window.addEventListener("orientationchange", function () {
      if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
        setCurrentHeight(NewHeight)
      }
    }, false);

  }, []);

  return (
    <>
      <SEO title="Page two" />
      <section style={{ minHeight: `calc(${currentHeight}px - 6rem)` }}>
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
        <h2 style={{ fontSize: '3rem', color: 'red', textAlign: 'center' }}>{`InnerHeight: ${currentHeight}`}</h2>
      </section>
    </>
  )
}

export default SecondPage
