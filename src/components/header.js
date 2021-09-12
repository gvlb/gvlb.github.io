import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <header className="flex flex-col md:px-12">
        <div className="flex flex-row">
            <h1 className="font-bold text-black dark:text-gray-200 text-sm md:text-base mr-2">ovalb</h1>
            <a className="px-2 hover:text-red-500" href="https://github.com/ovalb">
            <FontAwesomeIcon icon={faGithubAlt} size="1x" /></a>
            {/* <a className="px-2" href="https://www.linkedin.com/in/giorgiovalbonesi/">
            <FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a> */}
            <a className="px-2 hover:text-red-500" href="https://stackoverflow.com/users/4354167/onval">
            <FontAwesomeIcon icon={faStackOverflow} size="1x" /></a>
        </div>
      </header>
    )}