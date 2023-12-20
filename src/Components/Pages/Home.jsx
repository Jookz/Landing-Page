import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import Reveal from "../Reveal";
import BackgroundAnimation from "../BackgroundAnimation";

export default function Home() {
  return (
    <Reveal>
      <BackgroundAnimation />
      <h2 className="text-green-900 md:text-8xl text-6xl pt-24">
        Hello and welcome to my portfolio page. My name is{" "}
        <span className="text-black">Jonathan Chatterton</span> and I am a
        Junior Software Developer.
      </h2>

      <div className="flex flex-col items-center justify-center p-28">
        <HashLink
          id="#about"
          smooth
          className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
          to="#about"
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="h-24 text-green-900 hover:text-black animate-bounce duration-500"
          />
        </HashLink>{" "}
        <BackgroundAnimation />
      </div>
    </Reveal>
  );
}
