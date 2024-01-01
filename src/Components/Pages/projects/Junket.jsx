import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../Reveal";

export default function Junket() {
  return (
    <Reveal>
      <section className="md:w-11/12 md:mx-auto">
        <img
          className="mx-auto h-40"
          src="../../../../images/junket-logo.png"
          alt="Junket Logo"
        />
        <section className="p-10 bg-green-900 rounded-xl mx-16 px-16">
          <p className="text-amber-100 text-1xl mb-10 text-center">
            Junket is a solo-traveler application designed to redefine your
            travel experience. Seamlessly connect with fellow explorers and
            share captivating experiences. Craft your unique journey, attend
            curated events, and make memories that last a lifetime.
          </p>
          <div className="flex items-center mb-8">
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
              src={"../../../../images/github-logo.png"}
              alt="GitHub Logo"
            />
          </Link>
        </section>
      </section>
    </Reveal>
  );
}
