import React, { useEffect, useState } from "react"
import SEO from "../components/seo"
import NestedSwipers from '../components/Hero/NestedSwipers'

const IndexPage = () => {
  const [currentHeight, setCurrentHeight] = useState(0);
  useEffect(() => {
    let NewHeight = window.innerHeight
    setCurrentHeight(NewHeight)
  }, []);
  return (
    <>
      <SEO title="Home" />
      <section style={{ minHeight: `calc(${currentHeight}px - 6rem)` }}>
        <NestedSwipers />
      </section>
    </>
  )
}

export default IndexPage
