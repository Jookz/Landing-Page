import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 className="text-green-900 text-8xl">
        Welcome to my portfolio page. My name is{" "}
        <span className="text-black">Jonathan Chatterton</span> and I am a
        Junior Software Developer.
      </h2>
      <section className="grid justify-center mt-14">
        <Link
          className="text-green-900 text-6xl hover:text-black mt-14"
          to="/about"
        >
          About me.
        </Link>{" "}
        <br />
        <Link
          className="text-green-900 text-6xl hover:text-black mt-14"
          to="/skills"
        >
          Technical skills.
        </Link>
        <br />
        <Link
          className="text-green-900 text-6xl hover:text-black mt-14"
          to="/projects"
        >
          My Projects.
        </Link>{" "}
        <br />
        <Link
          className="text-green-900 text-6xl hover:text-black mt-14"
          to="/contact"
        >
          Contact me.
        </Link>
      </section>
    </div>
  );
}
