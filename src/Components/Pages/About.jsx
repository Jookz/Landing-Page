import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <p>Here's a little about me.</p>
      <Link to="https://www.linkedin.com/in/jonathan-chatterton-b6819019b/">
        LinkedIn |{" "}
      </Link>
      <Link to="https://github.com/Jookz">GitHub</Link>
    </div>
  );
}
