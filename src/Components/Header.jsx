import React from "react";
import { Link } from "react-router-dom";
import HomeLogo from "../../home-logo.svg";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <img className="h-8 float-right m-4" src={HomeLogo} alt="Home Icon" />
      </Link>
      <h1 className="text-green-900 text-6xl">Jonathan Chatterton</h1>
      <h3 className="text-green-900 text-6xl">Junior Software Developer</h3>
    </div>
  );
}
