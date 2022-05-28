import axios from "axios";
import * as React from "react";
import Layout from "../components/layout";

// create a form connected to some FaaS or even like Zapier or something
// https://medium.com/datafire-io/simple-backends-four-ways-to-implement-a-contact-us-form-on-a-static-website-10fc430984a4
export default function Contact({ location }) {
  const [showAlert, setShowAlert] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  }, [showAlert]);

  const sendMessage = async () => {
    const data = {
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      email: document.getElementById("email").value,
    };

    console.log("about to send: ", data);
    setShowAlert(true);

    try {
      const response = await axios.post(
        "https://qdkbe8v1kj.execute-api.us-east-1.amazonaws.com/prod/contactme",
        data
      );

      console.log("email should have been sent: ", response);
      setShowAlert(true);
    } catch (err) {
      console.log("Something went wrong-> ", err);
    }
  };

  return (
    <Layout location={location}>
      <label>
        Email
        <br />
        <input id="email" className="input-field" type="email" name="subject" />
      </label>
      <br />
      <label>
        Subject
        <br />
        <input
          id="subject"
          className="input-field"
          type="text"
          name="subject"
        />
      </label>
      <br />
      <label>
        Message
        <br />
        <textarea id="message" className="input-field" name="message" />
      </label>
      <br />
      <button
        className="border m-1 p-1 rounded-md"
        type="submit"
        onClick={() => {
          sendMessage();
        }}
      >
        Send
      </button>
      {showAlert && <label> ok bello </label>}
    </Layout>
  );
}
