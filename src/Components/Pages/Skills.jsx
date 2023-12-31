import React from "react";
import Reveal from "../Reveal";

export default function Skills() {
  return (
    <div id="skills" className="pt-8">
      <Reveal>
        <h1 className="text-green-900 md:text-7xl text-5xl mt-8">
          Technical skills.
        </h1>
      </Reveal>
      <Reveal>
        <section className="flex flex-wrap mb-24 py-20 px-10 justify-center">
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
            </div>

            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              JavaScript: Primary programming language used over the course of
              Northcoders bootcamp.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100 "
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Node.js: Used in conjunction with JS as a runtime environment and
              for server-side scripting.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              TypeScript: Learned for new project as more readable, maintable
              alternative to JS.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Jest: Used for backend unit and integration testing in all
              projects.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Git: Used for version control to track changes of projects and
              particularly to coordinate with colleagues on Junket project.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              GitHub: Hosting platform for version control nd collaboration.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Express: Used for building RESTful APIs in the backend of NC-News
              and Junket projects.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              PostgreSQL: Used to create and manipulate databases for all
              projects in conjunction with ElephantSQL.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              HTML: Learned initially on freeCodeCamp and knowledge developed
              over the course of Northcoders bootcamp.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              CSS: Learned initially on freeCodeCamp and knowledge developed
              over the course of Northcoders bootcamp.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Bootstrap: CSS Framework used on course for quick and effective
              styling.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              React: Used to create this website as well as NC-News. Native:
              Used for Junket to allow its use on Android devices.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Redux: Used in current "Collab Hub" project for state management
              as an alternative to useContext.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Tailwind: Used on "Collab Hub" as well as this website for
              styling.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Trello: Kanban board used both on, and after bootcamp for group
              collaboration, daily standups and organisation.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Firebase: Used on Junket for user authorisation.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              NPM: Heavily used for Node.js package management and installation.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src={"../../../images/netlify.png"}
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Netlify: Used to host NC-News and this website!
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src={"../../../images/expo.png"}
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Expo Go: Used for Junket as a method of testing app functionality
              and UX.
            </span>
          </div>
          <div className="group justify-center flex relative sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 mb-2">
            <div className="p-5">
              <img
                className="h-24 hover:h-28 duration-100"
                src={"../../../images/axios.png"}
              />
            </div>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-xs text-gray-100 rounded-md absolute translate-x-1/3 -translate-y-2/4 opacity-0 m-4 mx-auto p-1">
              Axios: Used as alternative to fetch when using APIs.
            </span>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
