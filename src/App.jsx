import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Projects from "./Components/Pages/Projects";
import Contact from "./Components/Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Skills from "./Components/Pages/Skills";
import ScrollToTop from "react-scroll-up";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import BackgroundAnimation from "./Components/BackgroundAnimation";

function App() {
  return (
    <div>
      <Header />
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTop showUnder={250} duration={500}>
        <FontAwesomeIcon
          icon={faCircleArrowUp}
          className="h-14 text-green-900 hover:text-black duration-500"
        />
      </ScrollToTop>
    </div>
  );
}

export default App;
