import React from "react"
import Helmet from "react-helmet"
import Project from "../components/Project"

import dezoneicon from '../images/dezone.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubAlt, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return <div className="py-5 px-5 md:px-10 font-mono font-normal text-gray-800 dark:bg-gray-900 dark:text-gray-300 h-screen">
    <Helmet title="Giorgio Valbonesi">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />s
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" property="og:description" content="Giorgio Valbonesi's portofolio website" />
    </Helmet>
    <header className="flex flex-col md:px-12">
    <div className="flex flex-row">
      <a className="px-2" href="https://github.com/ovalb">
        <FontAwesomeIcon icon={faGithubAlt} size="md" /></a>
      <a className="px-2" href="https://www.linkedin.com/in/giorgiovalbonesi/">
        <FontAwesomeIcon icon={faLinkedinIn} size="md" /></a>
      <a className="px-2" href="https://stackoverflow.com/users/4354167/onval">
        <FontAwesomeIcon icon={faStackOverflow} size="md" /></a>
    </div>
      <div className="flex flex-col">
        <h1 className="font-semibold md:text-xl"> Giorgio Valbonesi</h1>
        <h1 className="font-normal text-gray-600 dark:text-gray-400 text-sm md:text-base">ovalb</h1>
      </div>
    </header>
    <main>
    <section className="md:pt-0 md:px-12 text-sm md:text-base">
      <h2 className="font-semibold pt-5">About me </h2>
      <p>Hi, I'm a software developer who <b>loves</b> to build and use great products.</p>
      {/* great = simple */}
      <p className="pt-4">Albeit my main focus is the engineering side of things (design, implementation, testing), I greatly value honing other necessary skills, especially UI/UX and marketing.</p>
      {/* <p className="pt-4">I have experience in building both mobile apps and web apps (as a fullstack developer).</p> */}
      <p className="pt-4">I have other interests in life such as <i>languages, productivity, learning models, psychology, christian theology, chess</i> and more for you to discover.</p>

      <p className="pt-4">If you have some cool projects in which you'd like me to contribute, feel free to contact me.</p>

    </section>

    <section className="py-5 md:px-12">
      <h2 className="font-semibold text-sm md:text-base">Notable projects</h2>
      <Project name="Dezone"
              desc="all-in-one macOS timer app" 
              img={dezoneicon}
              link="https://ovalb.github.io/Dezone" />
    </section>
    </main>
    </div>
}
