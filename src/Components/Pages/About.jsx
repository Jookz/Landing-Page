import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="mt-64">
      <h1 className="text-green-900 text-8xl">Here's a little about me.</h1>
      <p className="text-green-800 text-2xl mx-20 my-10 text-center">
        I'm a dedicated and driven Software Developer seeking Junior Software
        Role. Excited and interested by the software industry as it can allow
        for creativity, collaboration and new and interesting challenges.
        Completed 13-week full-time software engineering bootcamp geared towards
        developing valuable and immediately usable skills in front-end and
        back-end software engineering. Involved use of test-driven development,
        pair programming and agile methodologies to develop knowledge and
        understanding of full-stack software development and app creation.{" "}
      </p>
      <img
        className="grid w-1/2 mx-auto"
        src="../../codecrafters.jpg"
        alt="Picture of CodeCrafters team from graduation day at NorthCoders"
      />
      <p className="text-green-800 text-2xl mx-20 my-10 text-center">
        Previous experience as General Manager responsible for oversight of the
        operations of a domestic cleaning business. Responsible for setting
        strategic goals, developing plans to achieve those goals, and managing
        resources to ensure that the business runs smoothly and efficiently. I
        am results-driven, analytical, and able to think creatively to solve
        complex problems. I possess strong communication and interpersonal
        skills, and am able to build strong relationships with clients,
        employees, and other stakeholders. I also posess over 8 years of
        experience in diverse management, customer service and administration
        roles including administration officer for the Department for Work and
        Pensions and Mentor Coordinator for Enactus Sheffield. Proficient in{" "}
        <strong>
          JS, SQL, React, React Native, HTML, CSS, TDD, Pair Programmnig and MS
          Office Suite{" "}
        </strong>
        .
      </p>
      <p className="text-green-800 text-2xl mx-20 my-10 text-center">
        {" "}
        In my spare time I enjoy taking part in chess matches and meetups with a
        local chess society as well as playing squash and badminton. I also take
        advantage of the nearby Peak District going on walks most weekends with
        my wife and meeting up with friends.
      </p>
      <Link to="https://www.linkedin.com/in/jonathan-chatterton-b6819019b/">
        LinkedIn |{" "}
      </Link>
      <Link to="https://github.com/Jookz">GitHub</Link>
    </div>
  );
}
