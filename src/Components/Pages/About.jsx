import React from "react";
import Reveal from "../Reveal";
import Banner from "../Banner";

export default function About() {
  return (
    <div id="about" className="mt-48 mb-48">
      <div className="h-16"></div>
      <Reveal delay={0.25}>
        <h1 className="text-green-900 md:text-7xl text-5xl">
          Here's a little about me.
        </h1>
      </Reveal>

      <section className="p-16 flex items-center flex-wrap">
        <Reveal delay={0.25}>
          <p className="text-green-800 text-2xl text-center my-auto">
            I'm a passionate and creative Software Developer with a keen
            interest in the collaborative and innovative aspects of the
            industry. Recently completing a 13-week software engineering
            bootcamp at
            <a
              className="text-black hover:text-green-700"
              href="https://northcoders.com"
              target="_blank"
            >
              {" "}
              Northcoders{" "}
            </a>
            I gained valuable skills in both front-end and back-end development,
            utilizing test-driven development, pair programming, and agile
            methodologies. Outside of coding, I love to play for Preston Chess
            Club and Fulwood Squash Club. Weekends often involve hikes and
            visits to the Lake District with family and friends.
          </p>
        </Reveal>
      </section>
      <Banner />
    </div>
  );
}
