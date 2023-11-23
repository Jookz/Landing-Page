import React from "react";
import { Link } from "react-router-dom";
const feather = require("feather-icons");
import { Home } from "react-icons/fi";

export default function Header() {
  console.log(feather.icons.x);
  return (
    <div>
      <Link to="/">
        <img
          className="h-8 float-right m-4"
          src="../home-icon.png"
          alt="Home Icon"
        />
      </Link>
      <h1 className="text-green-900 text-6xl">Jonathan Chatterton</h1>
      <h3 className="text-green-900 text-6xl">Junior Software Developer</h3>
    </div>
  );
}
