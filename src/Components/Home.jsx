import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h2>
        Welcome to my portfolio page. My name is Jonathan and I am a Junior
        Software Developer.
      </h2>
      <Link to="/about">About me.</Link> <br />
      <Link to="/projects">My Projects.</Link> <br />
      <Link to="/contact">Contact me.</Link>
    </div>
  );
}
