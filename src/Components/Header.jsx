import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img className="home-icon" src="../home-icon.png" alt="Home Icon" />
      </Link>
      <h1>Jonathan Chatterton</h1>
      <h3>Junior Software Developer</h3>
    </div>
  );
}
