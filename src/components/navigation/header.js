import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"
import logo from "../../images/Logo.png"

const Header = ({ siteTitle }) => (
  <header className={styles.headerContainer}>
    <div className={styles.logoContainer} onClick={event => {navigate("/")}}>
      <img src={logo} alt="Logo" />
    </div>
    <nav>
      <ul className={styles.linkContainer}>
        <li className={styles.linker}><Link to="/dictionary/">Dictionary</Link></li>
        <li className={styles.linker}><Link to="/features/">Features</Link></li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
