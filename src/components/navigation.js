import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/"><b>Home</b></Link>
    <a href="https://www.instagram.com/satecvon/"><b>Instagram</b></a>
    <a href="https://von-fair.netlify.app/"><b>VON FAIR</b></a>
    <ThemeChanger/>
  </nav>
  
)
