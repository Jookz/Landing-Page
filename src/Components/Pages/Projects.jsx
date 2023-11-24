import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <section>
        <Link to="https://youtu.be/eL355T8fscw">Junket ✈️</Link>
        <p>
          Junket is a solo-traveler application designed to redefine your travel
          experience. Seamlessly connect with fellow explorers and share
          captivating experiences. Craft your unique journey, attend curated
          events, and make memories that last a lifetime.
        </p>
        <Link to="https://github.com/Jookz/codecrafters-fe">
          <img className="h-8" src={"../github-logo.png"} alt="GitHub Logo" />
        </Link>
        <Link to="https://youtu.be/eL355T8fscw">
          <img className="h-8" src={"../Youtube_logo.png"} alt="YouTube Logo" />
        </Link>
      </section>
      <section>
        <Link to="https://nc-news-26.netlify.app/">NC News 📰</Link>
        <p>
          NC-News is a simulated news platform, designed with a backend API that
          enables programmatic access to application data, and a front end that
          allows the user to easily and effectively use it. The primary goal is
          to replicate the structure of a real-world backend service, similar to
          platforms like Reddit, furnishing essential information to the
          front-end architecture. This project serves as a demonstration,
          showcasing the mechanisms involved in creating a functional backend
          that delivers data to a front-end interface.
        </p>
        <Link to="https://github.com/Jookz/fe-nc-news">
          <img className="h-8" src={"../github-logo.png"} alt="GitHub Logo" />
        </Link>
      </section>
    </div>
  );
}
