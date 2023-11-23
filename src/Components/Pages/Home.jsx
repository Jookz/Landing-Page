import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2 className="text-green-900 text-6xl">
        Welcome to my portfolio page. My name is Jonathan and I am a Junior
        Software Developer.
      </h2>
      <Link className="text-green-900 text-6xl hover:text-black" to="/about">
        About me.
      </Link>{" "}
      <br />
      <Link className="text-green-900 text-6xl hover:text-black" to="/projects">
        My Projects.
      </Link>{" "}
      <br />
      <Link className="text-green-900 text-6xl hover:text-black" to="/contact">
        Contact me.
      </Link>
    </div>
  );
}
