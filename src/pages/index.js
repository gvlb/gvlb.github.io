import React from "react"
import Helmet from "react-helmet"
import Project from "../components/Project"

import dezoneicon from '../images/dezone.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"

export default function Home() {
  return <div className="py-5 px-5 md:px-10 font-mono font-normal text-gray-800 dark:bg-gray-900 dark:text-gray-300 h-screen">
    <Helmet title="Giorgio Valbonesi">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />s
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" property="og:description" content="Giorgio Valbonesi's portofolio website" />
    </Helmet>
    
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
    <main>
    <section className="py-5 md:px-12">
      <h2 className="font-semibold text-sm md:text-base">Projects</h2>
      <Project name="Dezone"
              desc="all-in-one macOS timer app" 
              img={dezoneicon}
              link="https://ovalb.github.io/Dezone" />
    </section>
    </main>
    </div>
}
