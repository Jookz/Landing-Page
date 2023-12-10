import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div id="projects">
      <div className="h-16"></div>
      <h2 className="text-green-900 text-8xl">My Projects.</h2>
      <div className="my-12"></div>

      <section>
        <img
          className="mx-auto h-40"
          src="../../junket-logo.png"
          alt="Junket Logo"
        />
        <section className="grid grid-cols-2 gap-8 px-16">
          <div className="p-10 bg-green-900 rounded-xl">
            <p className="text-amber-100 text-2xl mb-10 text-center">
              Junket is a solo-traveler application designed to redefine your
              travel experience. Seamlessly connect with fellow explorers and
              share captivating experiences. Craft your unique journey, attend
              curated events, and make memories that last a lifetime.
            </p>
            <ul className="flex justify-center gap-8 flex-wrap">
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                JavaScript
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Node.js
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Express
              </li>
              <li className="inline bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                <p>React Native</p>
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                PSQL
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Firebase
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Expo Go
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Axios
              </li>
              <li className="inline bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Google Places API
              </li>
            </ul>
            <Link to="https://github.com/Jookz/codecrafters-fe">
              <img
                className="h-12 mx-auto mt-12 hover:h-16 duration-300"
                src={"../github-logo.png"}
                alt="GitHub Logo"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <iframe
              className="mx-auto rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eL355T8fscw?si=HIWD1GZwabhqANUm"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </section>
      <div className="border-2 width-fit mx-12 my-12 border-green-900"></div>
      <section className="grid justify-center">
        <h1 className="text-black text-center text-7xl font-serif mb-4">
          NC News
        </h1>
        <Link
          className="text-amber-100 text-center w-fit mx-auto p-2 bg-green-900 mb-8 text-lg hover:bg-green-700 border-2 border-green-900 rounded-lg"
          to="https://nc-news-26.netlify.app/"
          target="_blank"
        >
          View the hosted site!
        </Link>

        <section className="grid grid-cols-2 gap-8 px-16">
          <div className="p-10 bg-green-900 rounded-xl h-fit">
            <p className="text-amber-100 text-2xl mb-10 text-center">
              NC-News is a simulated news platform, designed with a backend API
              that enables programmatic access to application data, and a front
              end that allows the user to easily and effectively use it. The
              primary goal is to replicate the structure of a real-world backend
              service, similar to platforms like Reddit, furnishing essential
              information to the front-end architecture. This project serves as
              a demonstration, showcasing the mechanisms involved in creating a
              functional backend that delivers data to a front-end interface.
            </p>
            <ul className="flex justify-center gap-8 flex-wrap">
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                JavaScript
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Node.js
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Express
              </li>
              <li className="inline bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                React
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                PSQL
              </li>
              <li className="bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Axios
              </li>
              <li className="inline bg-amber-100 text-green-900 w-fit p-1.5 rounded-md px-2">
                Render
              </li>
            </ul>
            <Link to="https://github.com/Jookz/fe-nc-news">
              <img
                className="h-12 mx-auto mt-12 hover:h-16 duration-300"
                src={"../github-logo.png"}
                alt="GitHub Logo"
              />
            </Link>
          </div>
          <div className="space-y-8">
            <img
              className="rounded-xl"
              src="../../../NC-news-frontend.png"
              alt="Image of NC-News website displaying grid of articles"
            />
            <img
              className="rounded-xl"
              src="../../../NC-news-backend.png"
              alt="Image of NC-News backend code, including controller and test file"
            />
          </div>
        </section>
      </section>
    </div>
  );
}
