import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <div id="contact">
      <div className="h-16"></div>
      <Reveal delay={0.75}>
        <h1 className="text-green-900 text-8xl mb-20">Contact me.</h1>
      </Reveal>

      <div className="flex flex-col items-center">
        <Link
          to="https://www.linkedin.com/in/jonathan-chatterton-b6819019b/"
          target="_blank"
        >
          <Reveal delay={0.75}>
            <div className="group flex flex-row mb-16">
              <h1 className="text-green-900 text-6xl items-baseline hover:text-black mr-4">
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
        <Reveal delay={0.75}>
          <div className="group flex flex-col items-center">
            <div className="flex flex-row items-center">
              <h1 className="text-green-900 text-6xl mr-4">Email me</h1>
              <div className="text-6xl group-hover:animate-bounce">📩</div>
            </div>

            <textarea
              placeholder="Love the website mate...wanna hang?"
              className="p-2"
              id=""
              cols="50"
              rows="5"
            ></textarea>
            <button
              className="mt-4 text-amber-100 text-center w-fit mx-auto p-2 bg-green-900 mb-8 text-lg hover:bg-green-700 border-2 border-green-900 rounded-lg"
              to="https://nc-news-26.netlify.app/"
            >
              Send
            </button>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
