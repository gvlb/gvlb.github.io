import React from "react"
import Project from "../components/Project"

import dezoneicon from '../images/dezone.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  return <div className="py-5 px-5 md:px-10 font-mono font-normal text-gray-800">
    <header className="flex flex-row">
      <div className="flex flex-col">
        <a className="pt-1" href="https://github.com/ovalb">
          <FontAwesomeIcon icon={faGithubAlt} size="lg" /></a>
        <a className="pt-2" href="https://www.linkedin.com/in/giorgiovalbonesi/">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a>
        <a className="pt-2" href="">
          <FontAwesomeIcon icon={faBook} size="lg" /></a>
      </div>
      <div className="flex flex-col px-5 md:px-9">
        <h1 className="font-semibold md:text-xl"> Giorgio Valbonesi</h1>
        <h1 className="font-normal text-gray-600 text-sm md:text-base">ovalb</h1>
      </div>
    </header>
    <main>
    <section className="pt-5 md:pt-0 md:px-12">
      <h2 className="font-semibold text-sm md:text-base">About me </h2>
      <p className="text-sm md:text-base">Software developer who strives to build better products. Also a nerd.</p>
    </section>

    <section className="py-5 md:px-12">
      <h2 className="font-semibold text-sm md:text-base">Latest projects</h2>
      <Project name="Dezone"
              desc="all-in-one macOS timer app" 
              img={dezoneicon}
              link="https://ovalb.github.io/Dezone" />
    </section>
    </main>
    </div>
}
