import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="fixed">
      <section className="flex flex-row space-x-4 bg-green-700 w-screen items-center justify-end opacity-25 hover:opacity-100 duration-300 pr-6">
        <Link
          className="mr-auto"
          to="https://drive.google.com/file/d/1WALJSNKY8fanMtuQX_1Jg3R7OgtRNF9c/view?usp=sharing"
          target="_blank"
        >
          <img
            className="h-10  my-2 ml-4 hover:h-12 duration-500"
            src="../../cv.png"
            alt=""
          />
        </Link>
        <HashLink
          id="#about"
          smooth
          className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
          to="#about"
        >
          About me.
        </HashLink>{" "}
        <br />
        <HashLink
          id="#skills"
          smooth
          className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
          to="#skills"
        >
          Technical skills.
        </HashLink>
        <br />
        <HashLink
          id="#projects"
          smooth
          className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
          to="#projects"
        >
          My Projects.
        </HashLink>{" "}
        <br />
        <HashLink
          id="#contact"
          smooth
          className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
          to="#contact"
        >
          Contact me.
        </HashLink>
      </section>
    </div>
  );
}
