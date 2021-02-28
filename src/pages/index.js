import React from "react"
import Project from "./Project"

import dezoneicon from '../images/dezone.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return <div className="py-5 px-10 font-mono font-normal text-gray-800">
    <header className="flex flex-row">
      <div className="flex flex-col pt-1">
        <a href="https://github.com/ovalb"><FontAwesomeIcon icon={faGithubAlt} /></a>
        <a href="https://www.linkedin.com/in/giorgiovalbonesi/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
        <a><FontAwesomeIcon icon={faBook} /></a>
      </div>
      <div className="flex flex-col px-9">
        <h1 className="font-semibold text-xl"> Giorgio Valbonesi</h1>
        <h1 className="font-medium text-gray-600">ovalb</h1>
      </div>
    </header>
    <main>
    <section className="py-5 px-12">
      <h2 className="font-semibold">About me </h2>
      <p>Software developer who strives to build better products. Also a nerd.</p>
    </section>

    <section className="py-5 px-12">
      <h2 className="font-semibold">Latest projects</h2>
      <Project name="Dezone"
              desc="all-in-one macOS timer app" 
              img={dezoneicon}
              link="https://ovalb.github.io/Dezone" />
    </section>
    </main>
    </div>
}
