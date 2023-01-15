import React from "react"
import { Link } from "gatsby"

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
            <a href="/#intro">STORY</a>
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
