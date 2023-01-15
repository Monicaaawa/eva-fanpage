import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Header = () => {
  return (
    <header>
      <div className="eva-heading">
        <h3>
          新世紀エヴァンゲリオン
        </h3>

        <br></br>

        <div className="flex">
          <div>
            <Link to="/">HOME</Link>
          </div>
          <div>
            <AnchorLink to="/#intro" title="story">STORY</AnchorLink>
          </div>
          <div>
            <Link to="/characters">CHARACTERS</Link>
          </div>
          <div>
            <Link to="/evangelions">EVANGELIONS</Link>
          </div>
        </div>
      </div>

      
      
    </header>
  )
}

export default Header
