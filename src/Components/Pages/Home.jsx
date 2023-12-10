import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { HashLink } from "react-router-hash-link";
import { fadeIn } from "../FadeIn";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      variants={fadeIn("down", "spring", 1, 0.5)}
      initial="hidden"
      animate="visible"
    >
      <h2 className="text-green-900 text-8xl pt-24">
        Hello and welcome to my portfolio page. My name is{" "}
        <span className="text-black">Jonathan Chatterton</span> and I am a
        Junior Software Developer.
      </h2>
      <div className="flex items-center justify-center p-28">
        <HashLink
          id="#about"
          smooth
          className="text-amber-100 text-center text-4xl hover:text-black my-2 duration-300"
          to="#about"
        >
          <FontAwesomeIcon
            icon={faCircleArrowDown}
            className="h-24 text-green-900 hover:text-black animate-bounce duration-500"
          />
        </HashLink>{" "}
      </div>
    </motion.div>
  );
}
