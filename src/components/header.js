import PropTypes from "prop-types"
import React from "react"
import DesktopNavMenu from '../components/Menu/DesktopNav'
import MobileNavMenu from '../components/Menu/MobileNav'



const Header = ({ siteTitle, menuLinks }) => {
  return (
    <header>
      <DesktopNavMenu siteTitle={siteTitle} menuLinks={menuLinks} />
      <MobileNavMenu siteTitle={siteTitle} menuLinks={menuLinks} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
