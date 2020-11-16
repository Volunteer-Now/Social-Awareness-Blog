import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Home</Link>
    <Link to="/contact">About</Link>
    <Link to="/contact">Events</Link>
    <ThemeChanger/>
  </nav>
  
)
