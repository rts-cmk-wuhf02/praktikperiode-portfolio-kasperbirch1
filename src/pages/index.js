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
      <NestedSwipers currentHeight={currentHeight} />
    </>
  )
}

export default IndexPage
