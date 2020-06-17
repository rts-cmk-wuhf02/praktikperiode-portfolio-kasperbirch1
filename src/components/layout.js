/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  useEffect(() => {
    // override root variable called --vh width current screen size to and listen for a resize event
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    window.addEventListener('resize', () => {
      document.querySelector(':root').style.setProperty('--vh', window.innerHeight + 'px');
    })

  }, []);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
          slogan
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
      <main style={{ paddingTop: '3rem', backgroundImage: 'url("https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>{children}</main>
      <Footer siteSlogan={data.site.siteMetadata.slogan} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
