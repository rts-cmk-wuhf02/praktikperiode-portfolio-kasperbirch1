/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./header"
import Footer from "./Footer"
import Div100vh from 'react-div-100vh';

const Layout = ({ children }) => {
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
    <Div100vh style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
      <main style={{ backgroundImage: 'url("https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>{children}</main>
      <Footer siteSlogan={data.site.siteMetadata.slogan} />
    </Div100vh>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
