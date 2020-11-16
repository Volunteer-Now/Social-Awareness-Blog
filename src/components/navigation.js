import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact"><b>Home</b></Link>
    <Link to="/contact"><b>About</b></Link>
    <Link to="/contact"><b>Events</b></Link>
    <ThemeChanger/>
  </nav>
  
)
