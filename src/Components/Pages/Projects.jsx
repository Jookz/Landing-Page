import React, { useState } from "react";
import Junket from "./projects/Junket";
import NCNews from "./projects/NCNews";
import SwitchSelector from "react-switch-selector";
import Reveal from "../Reveal";
import BackgroundAnimation from "../BackgroundAnimation";

export default function Projects() {
  const [project, setProject] = useState("junket");

  const options = [
    {
      label: "Junket",
      value: "junket",
      selectedBackgroundColor: "#15803d",
    },
    {
      label: "NC-News",
      value: "nc-news",
      selectedBackgroundColor: "#15803d",
    },
  ];

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === "junket"
  );

  const handleSwitch = (selectedValue) => {
    setProject(selectedValue);
  };

  return (
    <Reveal>
      <div id="projects">
        <div className="h-16"></div>
        <h2 className="text-green-900 md:text-7xl text-5xl">My Projects.</h2>
        <div className="w-48 h-8 mx-auto mt-12 relative z-10">
          <SwitchSelector
            onChange={handleSwitch}
            options={options}
            initialSelectedIndex={initialSelectedIndex}
            backgroundColor={"#14532d"}
            fontColor={"black"}
            selectedFontColor={"white"}
          />
        </div>
        <Reveal>{project === "junket" ? <Junket /> : <NCNews />}</Reveal>
        <div>
          <BackgroundAnimation />
        </div>
      </div>
    </Reveal>
  );
}
