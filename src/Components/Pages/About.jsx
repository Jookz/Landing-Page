import React from "react";

export default function About() {
  return (
    <div id="about" className="mt-48 mb-48">
      <div className="h-16"></div>
      <h1 className="text-green-900 text-8xl">Here's a little about me.</h1>
      <section className="grid grid-cols-2 gap-8 p-16">
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
        </p>
        <img
          className="w-auto mx-auto rounded-xl"
          src="../../codecrafters.jpg"
          alt="Picture of CodeCrafters team from graduation day at NorthCoders"
        />
        <img
          className="grid w-auto mx-auto rounded-xl"
          src="../../Portrait.jpeg"
          alt="Picture of me in Sheffield"
        />
        <div>
          <p className="text-green-800 text-2xl text-center my-auto">
            In my spare time I enjoy taking part in chess matches and meetups
            with a local chess society as well as playing squash and badminton.
            I love going on hikes and visiting the nearby Lake District on
            weekends with my wife and family and friends.
          </p>
          <img
            className="w-auto mt-24 rounded-xl"
            src="../../../alps.jpeg"
            alt="picture of me hiking in the swiss alps"
          />
        </div>
      </section>
    </div>
  );
}
