import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h2 className="text-green-900 text-8xl"> Projects</h2>
      <div className="border-2 width-fit mx-12 my-12 border-green-900"></div>

      <section>
        <img
          className="mx-auto h-40"
          src="../../junket-logo.png"
          alt="Junket Logo"
        />
        <Link to="https://github.com/Jookz/codecrafters-fe">
          <img
            className="h-12 mx-auto"
            src={"../github-logo.png"}
            alt="GitHub Logo"
          />
        </Link>
        <p className="text-green-800 text-2xl mx-20 my-10 text-center">
          Junket is a solo-traveler application designed to redefine your travel
          experience. Seamlessly connect with fellow explorers and share
          captivating experiences. Craft your unique journey, attend curated
          events, and make memories that last a lifetime.
        </p>
        <iframe
          className="mx-auto"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/eL355T8fscw?si=HIWD1GZwabhqANUm"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <img
          className="h-14 color-amber-100"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        />
      </section>
      <div className="border-2 width-fit mx-12 my-12 border-green-900"></div>
      <section className="grid justify-center">
        <Link
          className="text-green-900 text-center my-12 text-7xl hover:text-black"
          to="https://nc-news-26.netlify.app/"
        >
          NC News
        </Link>
        <Link to="https://github.com/Jookz/fe-nc-news">
          <img
            className="h-12 mx-auto"
            src={"../github-logo.png"}
            alt="GitHub Logo"
          />
        </Link>
        <p className="text-green-800 text-2xl mx-20 my-10 text-center">
          NC-News is a simulated news platform, designed with a backend API that
          enables programmatic access to application data, and a front end that
          allows the user to easily and effectively use it. The primary goal is
          to replicate the structure of a real-world backend service, similar to
          platforms like Reddit, furnishing essential information to the
          front-end architecture. This project serves as a demonstration,
          showcasing the mechanisms involved in creating a functional backend
          that delivers data to a front-end interface.
        </p>
      </section>
    </div>
  );
}
