import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

export default function Header({location}) {
    return (
        <header className="flex flex-row justify-between font-mono font-medium">
        <div className="flex flex-row">
            <Link to="/">
                <h1 className="header-btn">ovalb</h1>
            </Link>
            <a className="header-btn" href="https://github.com/ovalb">
            <FontAwesomeIcon icon={faGithubAlt} size="1x" /></a>
            {/* <a className="px-2" href="https://www.linkedin.com/in/giorgiovalbonesi/">
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a> */}
            <a className="header-btn" href="https://stackoverflow.com/users/4354167/onval">
            <FontAwesomeIcon icon={faStackOverflow} size="1x" /></a>
        </div>
        <div>
            <ol>
                <li className={`inline header-btn ${(location && location.pathname.includes("blog") ? "underline" : "")}`}><Link to="/blog">Blog</Link></li>
                {/* <li className={`inline header-btn ${(location && location.href && location.href.includes("project") ? "text-red-500" : "")}`}><Link to="/project">Projects</Link></li> */}
                {/* <li className="inline header-btn"><Link to="/about">About</Link></li> */}
                {/* <li className={`inline header-btn ${(location && location.href && location.href.includes("contact") ? "text-red-500" : "")}`}><Link to="/contact">Contact</Link></li> */}
            </ol>
        </div>
      </header>
    )}