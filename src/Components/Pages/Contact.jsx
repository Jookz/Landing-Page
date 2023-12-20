import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [emailInvalid, setEmailInvalid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wnvpupo",
        "template_z72o5w8",
        form.current,
        "pj6f5r14ZOU5-LRkb"
      )
      .then(
        (result) => {
          e.target.reset();
          alert("Message sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const checkIsValid = (e) => {
    const inputValue = e.target.value;
    const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!inputValue.match(emailRegEx)) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
  };

  return (
    <div id="contact" className="relative">
      <div className="h-16"></div>
      <Reveal delay={0.5}>
        <h1 className="text-green-900 md:text-8xl text-6xl mb-20">
          Contact me.
        </h1>
      </Reveal>

      <div className="flex flex-col items-center">
        <Link
          to="https://www.linkedin.com/in/jonathan-chatterton-b6819019b/"
          target="_blank"
        >
          <Reveal delay={0.5}>
            <div className="group flex flex-row mb-16">
              <h1 className="text-green-900 md:text-6xl text-4xl items-baseline hover:text-black mr-4">
                Connect with me
              </h1>
              <img
                className="h-16 group-hover:animate-bounce"
                src="../../LinkedIn_icon_circle.svg.png"
                alt=""
              />
            </div>
          </Reveal>
        </Link>
        <Reveal delay={0.5}>
          <div className="group flex flex-col items-center">
            <div className="flex flex-row items-center">
              <h1 className="text-green-900 md:text-6xl text-4xl mr-4">
                Email me
              </h1>
              <div className="text-6xl group-hover:animate-bounce">📩</div>
            </div>
            <form
              className="flex flex-col mt-8"
              ref={form}
              onSubmit={sendEmail}
            >
              <label htmlFor="user_name">Your name</label>
              <input
                required
                placeholder="Jane Doe"
                className="rounded-md mb-4 w-96 p-2"
                id="user_name"
                name="user_name"
                type="text"
              />
              <label htmlFor="user_email">Your email address</label>
              <input
                required
                placeholder="Example@mail.com"
                className="rounded-md w-96 p-2"
                id="user_email"
                name="user_email"
                type="text"
                onChange={checkIsValid}
              />
              {emailInvalid ? (
                <p className="text-red-600 text-sm">
                  Please enter a valid email address
                </p>
              ) : (
                <div></div>
              )}
              <label className="mt-4" htmlFor="message">
                Your message
              </label>
              <textarea
                required
                placeholder="Love the website mate...wanna hang?"
                className="p-2 w-96"
                id="message"
                name="message"
                rows="5"
              ></textarea>
              <button
                className="mt-4 text-amber-100 text-center w-96 mx-auto p-2 bg-green-900 mb-8 text-lg hover:bg-green-700 border-2 border-green-900 rounded-lg disabled:bg-slate-500"
                disabled={emailInvalid}
              >
                Send
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
