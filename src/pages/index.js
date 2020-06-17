import React, { useEffect } from "react"
import SEO from "../components/seo"
import NestedSwipers from '../components/Hero/NestedSwipers'

const IndexPage = () => {
  useEffect(() => {
    // override root variable called --vh width current screen size to and listen for a resize event
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    window.addEventListener('resize', () => {
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    })

  }, []);
  return (
    <>
      <SEO title="Home" />
      <NestedSwipers />
    </>
  )
}

export default IndexPage
