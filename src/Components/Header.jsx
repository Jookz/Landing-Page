import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const [icon, setIcon] = useState("menu-outline");
  function handleMenu() {
    let list = document.querySelector("ul");
    if (icon === "menu-outline") {
      setIcon("close-circle-outline");
      list.classList.add("top-[80px]");
      list.classList.add("opacity-100");
    } else {
      setIcon("menu-outline");
      list.classList.remove("top-[80px]");
      list.classList.remove("opacity-100");
    }
  }

  return (
    <div className="pr-6 h-14 fixed z-50 space-x-4 bg-green-700 w-full items-center md:opacity-25 hover:opacity-100 duration-300">
      <span className="text-4xl text-amber-100 cursor-pointer md:hidden ">
        <ion-icon
          name={icon}
          onClick={() => {
            handleMenu();
          }}
        ></ion-icon>
      </span>
      <ul className="md:flex md:flex-row md:items-center md:z-auto md:static absolute bg-green-700 w-screen md:w-auto md:py-0 py-4 md:pl0 pl-2 left-0 md:opacity-100 opacity-0 top=[-400px] transition-all ease-in duration-500 -ml-16">
        <li>
          <HashLink
            id="#about"
            smooth
            className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
            to="#about"
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
          >
            Contact me.
          </HashLink>
        </li>
        <li className="ml-auto">
          <Link
            className="group flex items-center"
            to="https://drive.google.com/file/d/1WALJSNKY8fanMtuQX_1Jg3R7OgtRNF9c/view?usp=sharing"
            target="_blank"
          >
            <img
              className="h-10 my-2 hover:h-12 duration-500"
              src="../../cv.png"
              alt=""
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
