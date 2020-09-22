import React from "react"
import PropTypes from "prop-types"
import './footer.module.css'


const Footer = ({siteTitle}) => (
    <footer>
        © {new Date().getFullYear() + " "+ siteTitle }
    </footer>
)

Footer.propTypes = {
    siteTitle: PropTypes.string,
  }
  
Footer.defaultProps = {
    siteTitle: ``,
  }

export default Footer;