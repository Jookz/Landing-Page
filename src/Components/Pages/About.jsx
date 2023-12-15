import React from "react";
import Reveal from "../Reveal";

export default function About() {
  return (
    <div id="about" className="mt-48 mb-48">
      <div className="h-16"></div>
      <Reveal delay={0.25}>
        <h1 className="text-green-900 md:text-8xl text-6xl">
          Here's a little about me.
        </h1>
      </Reveal>
      <section className="p-16 flex items-center flex-wrap">
        <Reveal delay={0.25}>
          <p className="text-green-800 text-2xl text-center my-auto">
            I'm a driven and creative Software Developer. I love the creativity
            and collaboration that is so common in the software industry and I'm
            always eager to find new and interesting challenges. I recently
            completed a 13-week full-time software engineering bootcamp with{" "}
            <a
              className="text-black hover:text-green-700"
              href="https://northcoders.com"
              target="_blank"
            >
              Northcoders{" "}
            </a>
            geared towards developing valuable and immediately usable skills in
            front-end and back-end software development. Involved use of
            <strong>
              {" "}
              test-driven development, pair programming and agile methodologies
            </strong>{" "}
            to develop knowledge and understanding of full-stack software
            development and app creation.
            <br />
            In my spare time I enjoy taking part in chess matches and meetups
            with a local chess society as well as playing squash and badminton.
            I love going on hikes and visiting the nearby Lake District on
            weekends with my wife and family and friends.
          </p>
        </Reveal>
        <Reveal>
          <img
            className="w-max mt-24 rounded-xl"
            src="../../../alps.jpeg"
            alt="picture of me hiking in the swiss alps"
          />
        </Reveal>
      </section>
    </div>
  );
}