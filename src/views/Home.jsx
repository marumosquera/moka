import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import logo from "../MOKATOKEN.svg";
import { ImTwitter } from "react-icons/im";
import { PiCoffeeBold, PiCoffeeFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export const Home = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

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
          setSent(true);
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <>
    <section className="home">
      <img src={logo} className="logo"></img>
      <div className="moka-section">
      <h2 className="title">Sumate a la waitlist, ¿o te lo vas a perder?</h2>
      <form ref={form} onSubmit={sendEmail}>
        <textarea name="message" placeholder="Ingresa tu address o email" />
 
        {sent ? (
          <span className="btn">GRACIAS</span>
        ) : loading ? (
          <span className="btn">enviando</span>
        ) : (
          <input type="submit" value="enviar" className="btn"/>
        )}
     
       
      </form>

      <div className="bottom">
        <a href="https://x.com/mokatoken?s=21" className="twitter">   <ImTwitter /> </a>
     
        <div>
          <p>Aprendé más sobre MOKA</p>
          <div className="pitches">
            <Link to="/pitchEN">
              <div className="english">
          
                <span> ENGLISH PITCH</span>
              </div>
            </Link>
            <Link to="/pitchES">
              <div className="espanol">
        
                <span> PITCH ESPAÑOL </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      </div>
     
      </section>
    </>
  );
};
