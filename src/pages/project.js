import * as React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import dezoneicon from '../images/dezone.svg'

export default function Component () {
  return (
    <Layout>
      <section>
        <h2 className="font-semibold text-3xl">Projects</h2>
        <Project name="Dezone"
                desc="all-in-one macOS timer app" 
                img={dezoneicon}
                link="https://ovalb.github.io/Dezone" />
        {/* <Project name="Spaced"
                desc="spaced repetition web app"
                link="#" /> */}
      </section>
    </Layout>
  )
}