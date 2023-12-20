import { Link } from "react-router-dom";
import Reveal from "../../Reveal";

export default function NCNews() {
  return (
    <Reveal>
      <section className="grid justify-center">
        <h1 className="text-black text-center md:text-7xl text-5xl font-serif mb-4 mt-4">
          NC News
        </h1>
        <Link
          className="text-amber-100 text-center w-fit mx-auto p-2 bg-green-900 mb-8 text-lg hover:bg-green-700 border-2 border-green-900 rounded-lg"
          to="https://nc-news-26.netlify.app/"
          target="_blank"
        >
          View the hosted site!
        </Link>

        <section className="p-10 bg-green-800 rounded-xl h-fit mx-16 px-16">
          <p className="text-amber-100 text-1xl mb-10 text-center">
            NC-News is a simulated news platform, designed with a backend API
            that enables programmatic access to application data, and a front
            end that allows the user to easily and effectively use it. The
            primary goal is to replicate the structure of a real-world backend
            service, similar to platforms like Reddit, furnishing essential
            information to the front-end architecture. This project serves as a
            demonstration, showcasing the mechanisms involved in creating a
            functional backend that delivers data to a front-end interface.
          </p>
          <div className="space-y-8 flex flex-row h-4/12overflow-hidden mb-8">
            <img
              className="rounded-xl"
              src="../../../../images/NC-News-frontend.png"
              alt="Image of NC-News website displaying grid of articles"
            />
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
              src={"../../../../images/github-logo.png"}
              alt="GitHub Logo"
            />
          </Link>
        </section>
      </section>
    </Reveal>
  );
}
