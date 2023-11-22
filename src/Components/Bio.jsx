import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <p>
        Welcome to my portfolio page. My name is Jonathan and I am a Junior
        Software Developer.
      </p>
      <Link to="https://www.linkedin.com/in/jonathan-chatterton-b6819019b/">
        LinkedIn |{" "}
      </Link>
      <Link to="https://github.com/Jookz">GitHub</Link>
    </div>
  );
}
