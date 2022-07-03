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
            <a className="header-btn" alt="Github" href="https://github.com/ovalb">
            <FontAwesomeIcon title="Github" icon={faGithubAlt} size="lg" /></a>
            <a className="header-btn" alt="Stackoverflow" href="https://stackoverflow.com/users/4354167/onval">
            <FontAwesomeIcon title="Github" icon={faStackOverflow} size="lg" /></a>
        </div>
        <div>
            <ol>
                <li className={`header-btn ${(location && location.pathname.includes("blog") ? "underline" : "")}`}><Link to="/blog">Blog</Link></li>
            </ol>
        </div>
      </header>
    )}