import * as React from "react"
import Layout from "../components/layout"
import Project from "../components/Project"
import dezoneicon from '../images/dezone.svg'

export default function Component () {
  return (
    <Layout>
      <section className="py-5 md:px-12">
        <h2 className="font-semibold text-base">Projects</h2>
        <Project name="Dezone"
                desc="all-in-one macOS timer app" 
                img={dezoneicon}
                link="https://ovalb.github.io/Dezone" />
      </section>
    </Layout>
  )
}