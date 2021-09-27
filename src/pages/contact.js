import * as React from "react"
import axios from "axios"
import Layout from "../components/layout"
// create a form connected to some FaaS or even like Zapier or something
// https://medium.com/datafire-io/simple-backends-four-ways-to-implement-a-contact-us-form-on-a-static-website-10fc430984a4
export default function Contact () {
  return (
    <Layout>
    <form>
      <label>
        Email<br />
        <input id="email" className="border m-1 p-1 rounded-md w-3/6" type="email" name="subject" />
      </label>
      <br />
      <label>
        Subject<br />
        <input id="subject" className="border m-1 p-1 rounded-md w-3/6" type="text" name="subject" />
      </label>
      <br />
      <label>
        Message<br />
        <textarea id="message" className="border m-1 p-1 rounded-md w-3/6 h-2/3" name="message" />
      </label>
      <br />
      <button className="border m-1 p-1 rounded-md" type="submit" onClick={()=> sendMessage()} >Send</button>
    </form>
    </Layout>
  )
}

function sendMessage() {
  console.log("send message about to get called")
  const data = {
    "subject": document.getElementById("subject").value,
    "message": document.getElementById("message").value,
    "email": document.getElementById("email").value,
  }

  console.log(data)

  axios.post('https://qdkbe8v1kj.execute-api.us-east-1.amazonaws.com/prod/contactme', data)
}