import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [icon, setIcon] = useState("menu-outline");
  function handleMenu() {
    let list = document.querySelector("ul");
    if (icon === "menu-outline") {
      setIcon("close-circle-outline");
      list.classList.add("top-[55px]");
      list.classList.add("opacity-100");
    } else {
      setIcon("menu-outline");
      list.classList.remove("top-[55px]");
      list.classList.remove("opacity-100");
    }
  }

  return (
    <div className="h-14 fixed z-50 bg-green-700 w-full items-center md:opacity-25 hover:opacity-100 duration-300">
      <span className="text-5xl text-amber-100 cursor-pointer md:hidden ml-2">
        <ion-icon
          name={icon}
          size="large"
          onClick={() => {
            handleMenu();
          }}
        ></ion-icon>
      </span>
      <ul className="md:pl-2 md:flex md:flex-row md:items-center md:z-auto md:static absolute bg-green-700 w-screen md:w-auto left-0 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 md:-mt-0 sm:-mt-8">
        <li>
          <HashLink
            id="#about"
            smooth
            className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
            to="#about"
            onClick={() => {
              handleMenu();
            }}
          >
            About me.
          </HashLink>{" "}
        </li>
        <li>
          <HashLink
            id="#skills"
            smooth
            className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
            to="#skills"
            onClick={() => {
              handleMenu();
            }}
          >
            Technical skills.
          </HashLink>
        </li>
        <li>
          <HashLink
            id="#projects"
            smooth
            className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
            to="#projects"
            onClick={() => {
              handleMenu();
            }}
          >
            My Projects.
          </HashLink>{" "}
        </li>
        <li>
          <HashLink
            id="#contact"
            smooth
            className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
            to="#contact"
            onClick={() => {
              handleMenu();
            }}
          >
            Contact me.
          </HashLink>
        </li>
        <li className="ml-auto">
          <Link
            className="group flex items-center"
            to="https://drive.google.com/file/d/1WALJSNKY8fanMtuQX_1Jg3R7OgtRNF9c/view?usp=sharing"
            target="_blank"
            onClick={() => {
              handleMenu();
            }}
          >
            <img
              className="h-10 pr-2 my-2 hover:h-12 duration-500"
              src="../../images/cv.png"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
