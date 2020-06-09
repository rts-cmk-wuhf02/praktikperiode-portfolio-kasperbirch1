import React from "react"
import SEO from "../components/seo"
import NestedSwipers from '../components/Hero/NestedSwipers'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <NestedSwipers />
    </div>
  </>
)

export default IndexPage
