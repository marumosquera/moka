import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "./MOKATOKEN.svg";

function App() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_j5o75ue",
        "template_3iina5k",
        form.current,
        "CfIN4KgjIIwl9jBGu"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
      <img src={logo}></img>
      <p>Sumate a la waitlist, ¿o te lo vas a perder?</p>
      <form ref={form} onSubmit={sendEmail}>
        <textarea name="message" placeholder="Ingresa tu address o email" />
        {loading ? (
          <input value="enviando" />
        ) : (
          <input type="submit" value="enviar" />
        )}
      </form>
    </>
  );
}

export default App;
